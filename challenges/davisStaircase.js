// memo and recursion example

let cache = {
  1: 1,
  2: 2,
  3: 4,
};

function stepPerms(n) {
  if (!cache[n]) {
    cache[n] = stepPerms(n - 1) + stepPerms(n - 2) + stepPerms(n - 3);
  }
  return cache[n];
}

stepPerms(12)