import { describeBrowserLaunch, describeTestRun } from "./control-flow.js";
import { classifyParity, classifySign } from "./numbers.js";
import { areAnagrams, isPalindrome, lastWordLength, reverseText } from "./strings.js";

for (const browser of ["chrome", "edge"]) {
  console.log(describeBrowserLaunch(browser));
}
for (const suite of ["smoke", "sanity", "regression", "integration"]) {
  console.log(describeTestRun(suite));
}
for (const value of [-7, 0, 12]) {
  console.log(`${value} is ${classifySign(value)} and ${classifyParity(value)}.`);
}
console.log("Last word length:", lastWordLength("  Learn JavaScript  "));
console.log("Dormitory / Dirty room:", areAnagrams("Dormitory", "Dirty room"));
console.log("Reverse of drawer:", reverseText("drawer"));
console.log("Rotator is a palindrome:", isPalindrome("rotator"));
