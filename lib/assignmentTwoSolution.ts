export const hasUniqueCharacters = (str: string) => {
  const charSet = new Set();
  for (const char of str) {
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }
  return true;
};

const testString1 = "abcdefg"; // Has all unique characters
const testString2 = "hello"; // Does not have all unique characters

console.log("question two test 1", hasUniqueCharacters(testString1)); // Output: true
console.log("question two test 2", hasUniqueCharacters(testString2)); // Output: false

export const contains = (obj: any, targetValue: any) => {
  for (const key in obj) {
    if (obj[key] === targetValue) {
      return true;
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      if (contains(obj[key], targetValue)) {
        return true;
      }
    }
  }
  return false;
};

export const nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4,
    },
  },
  g: 5,
};

console.log("question two test 1", contains(nestedObject, 3)); // Output: true
console.log("question two test 2", contains(nestedObject, 6)); // Output: false
