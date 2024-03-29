function anagram(strings) {
  const anagrams = new Map();
  for (const str of strings) {
    const sortedStr = str.split("").sort().join("");
    if (!anagrams.has(sortedStr)) {
      anagrams.set(sortedStr, []);
    }
    anagrams.get(sortedStr).push(str);
  }
  return Array.from(anagrams.values()).sort((a, b) => a.length - b.length);
}

const strings = ["eat", "tea", "tan", "ate", "nat", "bat"];
out = anagram(strings);
console.log(out);
