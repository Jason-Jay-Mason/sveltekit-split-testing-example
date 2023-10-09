import type { Funnel } from "./funnel"
import { funnels } from './funnel'

export type Varient = {
  funnel: Funnel
  probability: number
}

export type SplitTest = {
  id: string
  varients: Varient[]
}

type SplitTestId = string

type Splits = Record<SplitTestId, SplitTest>

export const splits: Splits = {
  a: {
    id: 'a',
    varients: [
      {
        funnel: funnels.a,
        probability: 0.5
      },
      {
        funnel: funnels.b,
        probability: 0.5
      }
    ]
  }
}

export function getVarient(v: Varient[]): Funnel {
  const rando = Math.random()
  let collectiveProb = 0

  for (const varient of v) {
    collectiveProb += varient.probability
    if (rando <= collectiveProb) {
      return varient.funnel
    }
  }

  throw new Error(`Please make the sum of probabilities equal to 1 for splits: ${JSON.stringify(v)}`)
}

