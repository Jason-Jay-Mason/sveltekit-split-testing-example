import type { LayoutServerLoad } from './$types';
import { splits, getVarient } from '$lib/splits';
import { funnels } from '$lib/funnel';
import type { PathName } from '$lib/funnel';
import type { SplitTest } from '$lib/splits';

type EntryPoints = Record<PathName, SplitTest>
const entryPoints: EntryPoints = {
  '/salespage': splits.a,
  '/checkout': splits.a
}

export const load: LayoutServerLoad = async ({ cookies, url }) => {
  let funnelId = cookies.get('funnelId')
  if (funnelId) return {
    funnel: funnels[funnelId]
  }

  const pathname = url.pathname.replace(/\/+$/, '')

  let splitTest = entryPoints[pathname]
  if (!splitTest) return

  try {
    const funnel = getVarient(splitTest.varients)
    cookies.set('funnelId', funnel.id)
    return {
      funnel
    }
  } catch (e) {
    //handle the error the way you like
  }
}
