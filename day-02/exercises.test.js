import assert from "node:assert/strict";
import { test } from "node:test";
import { describeBrowserLaunch, describeTestRun } from "./control-flow.js";
import { classifyParity, classifySign } from "./numbers.js";
import {
  areAnagrams,
  isPalindrome,
  lastWordLength,
  reverseText,
} from "./strings.js";

test("browser selection gives Chrome a dedicated message", () => {
  assert.equal(describeBrowserLaunch("chrome"), "Starting Google Chrome.");
  assert.equal(describeBrowserLaunch("edge"), "Starting browser: edge.");
});

test("test selection recognizes each suite and falls back to smoke", () => {
  for (const suite of ["smoke", "sanity", "regression"]) {
    assert.equal(describeTestRun(suite), `Selected test suite: ${suite}.`);
  }
  assert.equal(
    describeTestRun("integration"),
    "Unrecognized suite. Selected test suite: smoke.",
  );
});

test("number sign handles decimals, signed zero, and invalid input", () => {
  assert.equal(classifySign(0.5), "positive");
  assert.equal(classifySign(-7), "negative");
  assert.equal(classifySign(-0), "zero");
  for (const value of [NaN, Infinity, "2"]) {
    assert.throws(() => classifySign(value), TypeError);
  }
});

test("parity handles negative integers and rejects invalid inputs", () => {
  assert.equal(classifyParity(-3), "odd");
  assert.equal(classifyParity(0), "even");
  assert.equal(classifyParity(12), "even");
  for (const value of [2.5, "3", Number.MAX_SAFE_INTEGER + 1]) {
    assert.throws(() => classifyParity(value), TypeError);
  }
});

test("last word handles whitespace and counts Unicode code points", () => {
  assert.equal(lastWordLength(""), 0);
  assert.equal(lastWordLength(" \t\n"), 0);
  assert.equal(lastWordLength("  Learn\tJavaScript\n"), 10);
  assert.equal(lastWordLength("icon 🚀"), 1);
});

test("anagrams ignore case and whitespace and respect character counts", () => {
  assert.equal(areAnagrams("Dormitory", "Dirty\troom"), true);
  assert.equal(areAnagrams("abb", "aab"), false);
  assert.equal(areAnagrams("ab!", "ab"), false);
  assert.equal(areAnagrams("a", "ab"), false);
});

test("reversal preserves Unicode code points and palindrome checks are exact", () => {
  assert.equal(reverseText("a🚀b"), "b🚀a");
  assert.equal(isPalindrome("rotator"), true);
  assert.equal(isPalindrome("drawer"), false);
  assert.equal(isPalindrome("Rotor"), false);
});
