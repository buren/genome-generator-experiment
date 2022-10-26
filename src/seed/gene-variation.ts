import { Dna } from '../genome';

export const geneVariationSeed: Dna[][] = [
  [
    { type: 'size', value: 'large', code: 's1', weight: 1 },
    { type: 'size', value: 'xlarge', code: 's2', weight: 1 },
    { type: 'size', value: 'xxlarge', code: 's3', weight: 1 },
  ],
  [
    { type: 'value', value: '3', code: 'v1', weight: 1 },
    { type: 'value', value: '5', code: 'v2', weight: 1 },
    { type: 'value', value: '8', code: 'v3', weight: 1 },
    { type: 'value', value: '12', code: 'v4', weight: 1 },
    { type: 'value', value: '13', code: 'v5', weight: 1 },
  ],
  [
    { type: 'color', value: 'blue', code: 'c1', weight: 1 },
    { type: 'color', value: 'red', code: 'c2', weight: 1 },
  ]
  // ...
]

export default geneVariationSeed
