function isValid(s) {
  let obj = {};
  let current = 0;
  let setFirst = false;
  let changed = false;

  // set up letter counter dictionary
  for (let x of s.split("")) {
    if (obj[x]) {
      obj[x] += 1;
    } else {
      obj[x] = 1;
    }
  }

  for (let y in obj) {
    //   set up first iteration
    if (!setFirst) {
      current = obj[y];
      setFirst = true;
    } else {
      let temp = obj[y];
      if (current === temp) {
        continue;
      } else {
        let num = temp - current;
        // times the num by its self and divide 2 to always get a positive int
        if ((num * num) / 2 > 1 && temp != 1 && !changed) {
          changed = true;
          continue;
        }
        if ((num * num) / 2 > 1 && temp != 1) return "NO";
        if (changed) return "NO";
        changed = true;
      }
    }
  }
  return "YES";
}

const answer = isValid("ixxxxxxccccccvvvvvvbbbbbbnnnnnnmmmmmm");
console.log(answer);
