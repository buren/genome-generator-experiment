import Genome from './../genome'
import geneVariationSeed from './../seed/gene-variation'

const combinations = () =>
  geneVariationSeed
    .map((array) => array.length)
    .reduce((a, b)=> a * b, 1)

const sequence = () => 
  new Genome(geneVariationSeed).sequence('-')

const times = 30
for (let index = 0; index < times; index++) {
  console.log(sequence());
}

console.log('\ncombinations', combinations());
