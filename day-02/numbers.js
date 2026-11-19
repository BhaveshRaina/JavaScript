export function classifySign(value) {
  if (!Number.isFinite(value)) {
    throw new TypeError("Expected a finite number.");
  }
  if (value === 0) {
    return "zero";
  }
  return value < 0 ? "negative" : "positive";
}

export function classifyParity(value) {
  if (!Number.isSafeInteger(value)) {
    throw new TypeError("Expected a safe integer.");
  }
  return value % 2 !== 0 ? "odd" : "even";
}
