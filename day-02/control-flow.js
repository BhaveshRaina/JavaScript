export function describeBrowserLaunch(browserName) {
  if (browserName === "chrome") {
    return "Starting Google Chrome.";
  }
  return `Starting browser: ${browserName}.`;
}

export function describeTestRun(suite) {
  switch (suite) {
    case "smoke":
    case "sanity":
    case "regression":
      return `Selected test suite: ${suite}.`;
    default:
      return "Unrecognized suite. Selected test suite: smoke.";
  }
}
