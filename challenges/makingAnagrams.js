function makeAnagram(a, b) {
  let removed = 0;
  let arr = b.split("");
  let objA = {};

  for (let i of a) {
    if (objA[i]) {
      objA[i] = objA[i] + 1;
    } else {
      objA[i] = 1;
    }
  }

  while (arr.length > 0) {
    if (objA[arr[0]] > 0) {
      objA[arr[0]] = objA[arr[0]] - 1;
      arr.splice(0, 1);
    } else {
      ++removed;
      arr.splice(0, 1);
    }
  }

  for (let y in objA) {
    if (objA[y]) removed += objA[y];
  }
  return removed;
}

makeAnagram("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke");
