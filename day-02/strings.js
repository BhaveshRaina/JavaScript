export function lastWordLength(text) {
  const lastWord = text.trimEnd().match(/\S+$/u)?.[0] ?? "";
  return Array.from(lastWord).length;
}

export function areAnagrams(firstText, secondText) {
  const firstCharacters = firstText.toLowerCase().replace(/\s/gu, "");
  const secondCharacters = secondText.toLowerCase().replace(/\s/gu, "");
  const remainingCounts = new Map();

  for (const character of firstCharacters) {
    remainingCounts.set(character, (remainingCounts.get(character) ?? 0) + 1);
  }

  // Consume each occurrence once so repeated characters must match as well.
  for (const character of secondCharacters) {
    const count = remainingCounts.get(character);
    if (count === undefined) {
      return false;
    }
    if (count === 1) {
      remainingCounts.delete(character);
    } else {
      remainingCounts.set(character, count - 1);
    }
  }
  return remainingCounts.size === 0;
}

export function reverseText(text) {
  // Iterate by Unicode code point to keep characters such as 🚀 intact.
  return Array.from(text).reverse().join("");
}

export function isPalindrome(text) {
  return text === reverseText(text);
}
