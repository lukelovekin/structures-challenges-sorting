// sort() in use

function maximumToys(prices, k) {
  let tally = k;
  let counter = 0;
  prices.sort((a, b) => a - b);

  for (let i = 0; i < prices.length - 1; i++) {
    if (tally - prices[i] > 0) {
      tally -= prices[i];
      counter++;
    } else {
      return counter;
    }
  }
  return counter;
}

maximumToys(50, [1,12,5,111,200,1000,10])
