/**
 * return the union of two sets
 */
function union(s1, s2) {
  let s1plus2;
  if (s1.size <= s2.size) {
    s1plus2 = new Set(s2);
    for (let item of s1) {
      s1plus2.add(item);
    }
  } else {
    s1plus2 = new Set(s1);
    for (let item of s2) {
      s1plus2.add(item);
    }
  }
  return s1plus2;
}

/**
 * return the intersection of two sets
 */
function intersect(s1, s2) {
  let intersection = new Set();
  for (let item of s1) {
    if (s2.has(item)) {
      intersection.add(item);
    }
  }
  return intersection;
}

/**
 * return the difference of two sets
 */
function difference(s1, s2) {
  let differences = new Set(s1);
  for (let item of s1) {
    if (s2.has(item)) {
      differences.delete(item);
    }
  }
  return differences;
}

module.exports = { union, intersect, difference };
