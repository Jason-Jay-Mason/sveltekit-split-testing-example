export type Cta = {
  innerText: string
  href: string
}

export type FunnelElement = {
  varient: 0 | 1
  cta: Cta
}

export type PathName = string

export type Funnel = {
  id: string
  data: {
    [key: PathName]: FunnelElement
  }
}

export const a: Funnel = {
  id: 'a',
  data: {
    '/salespage': {
      varient: 0,
      cta: {
        innerText: 'I Want It',
        href: '/checkout'
      }
    },
    '/checkout': {
      varient: 1,
      cta: {
        innerText: 'Purchase',
        href: '/'
      }
    },
  }
}

export const b: Funnel = {
  id: 'b',
  data: {
    '/salespage': {
      varient: 1,
      cta: {
        innerText: 'I Want In',
        href: '/upsell'
      }
    },
    '/upsell': {
      varient: 0,
      cta: {
        innerText: 'I Want The Upsell',
        href: '/checkout'
      }
    },
  }
}

export type Funnels = {
  [key: string]: Funnel
}

export const funnels: Funnels = {
  a,
  b,
}
