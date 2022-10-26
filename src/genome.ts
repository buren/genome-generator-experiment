import weightedRandom from "./utils/weighted-random"

export interface Dna {
  type: string
  code: string
  value: string
  weight: number
}

export const sequenceDna = (dna: Dna[], joiner = ''): string =>
  dna.map(({ code }) => code).join(joiner)

export const generateDna = (variationMatrix: Dna[][]): Dna[] =>
  variationMatrix.map((variations) =>
    weightedRandom(variations, variations.map(({ weight }) => weight))
  )

export default class Genome {
  dna: Dna[]

  constructor(variationMatrix: Dna[][]) {
    this.dna = generateDna(variationMatrix)
  }

  sequence(joiner = ''): string {
    return sequenceDna(this.dna, joiner)
  }
}
