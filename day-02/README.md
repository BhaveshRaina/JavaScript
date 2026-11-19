# Day 02 — Control flow, numbers, and strings

Run these commands from this folder using Node.js 22 or later. There are no dependencies to install.

```sh
npm start
npm test
```

| Exercise | Behavior |
| --- | --- |
| Browser selection | Use an `if` statement to give Chrome its own launch message. |
| Test selection | Use a `switch` to select smoke, sanity, or regression tests. Default to smoke for an unknown suite. |
| Number sign | Classify a finite number as positive, negative, or zero. |
| Parity | Classify a safe integer as even or odd. |
| Last word length | Count Unicode code points in the final whitespace-delimited word. Return zero for empty or whitespace-only input. |
| Anagrams | Compare character counts while ignoring case and whitespace. Punctuation counts. |
| Reverse and palindrome | Reverse a string and check whether it reads the same in both directions. Palindrome checks are case-sensitive and include whitespace and punctuation. |

Browser and test selection return messages for the demo to print.

The demo prints examples for every exercise. The test suite also covers invalid
numeric inputs, repeated anagram letters, blank strings, and Unicode characters.
