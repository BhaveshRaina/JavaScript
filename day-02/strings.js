export function lastWordLength(text) {
  const lastWord = text.trimEnd().match(/\S+$/u)?.[0] ?? "";
  return Array.from(lastWord).length;
}

export function areAnagrams(first, second) {
  const firstCharacters = first.toLowerCase().replace(/\s/gu, "");
  const secondCharacters = second.toLowerCase().replace(/\s/gu, "");
  const counts = new Map();

  for (const character of firstCharacters) {
    counts.set(character, (counts.get(character) ?? 0) + 1);
  }
  for (const character of secondCharacters) {
    const count = counts.get(character);
    if (count === undefined) {
      return false;
    }
    if (count === 1) {
      counts.delete(character);
    } else {
      counts.set(character, count - 1);
    }
  }
  return counts.size === 0;
}

export function reverseText(text) {
  return Array.from(text).reverse().join("");
}

export function isPalindrome(text) {
  return text === reverseText(text);
}
