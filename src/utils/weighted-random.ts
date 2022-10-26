// adapted from https://stackoverflow.com/a/55671924
export const weightedRandom = (items: any[], weights: number[], defaultWeight = 0) => {
  let i;

  for (i = 0; i < weights.length; i++) {
    weights[i] += weights[i - 1] || defaultWeight;
  }

  const random = Math.random() * weights[weights.length - 1];
  for (i = 0; i < weights.length; i++) {
    if (weights[i] > random) break;
  }

  return items[i];
}

export default weightedRandom
