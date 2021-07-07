/**
 * return true if two arrays are equal, false otherwise
 */
function isEqual(a1, a2) {
  // guard clause - input arrays must be same length;
  if (a1.length !== a2.length) return false;

  let a1Map = new Map();
  a1.forEach((item) => {
    let count = a1Map.get(item);
    if (!count >= 1) {
      count = 1;
    } else {
      count++;
    }
    const entry = [item, count];
    a1Map.set(...entry);
  });

  let a2Map = new Map();
  a2.forEach((item) => {
    let count = a2Map.get(item);
    if (!count >= 1) {
      count = 1;
    } else {
      count++;
    }
    const entry = [item, count];
    a2Map.set(...entry);
  });

  // double check that Maps are the same size even though Arrays were already checked
  if (a1Map.size !== a2Map.size) {
    return false;
  }

  // Check if maps have any key/values that do not match
  for (let [key, value] of a1Map.entries()) {
    if (a2Map.get(key) !== value) {
      return false;
    }
  }
  // only returns if check above passes
  return true;
}

module.exports = isEqual;
