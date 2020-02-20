const devLib = require("../lib/dev");
const prodLib = require("../lib/dev");

test("That dev lib has saveState", () => {
  expect(typeof devLib.saveState).toBe("function");
});

test("That dev lib has loadState", () => {
  expect(typeof devLib.loadState).toBe("function");
});

test("That dev lib has purgeState", () => {
  expect(typeof devLib.purgeState).toBe("function");
});

test("That prod lib has saveState", () => {
  expect(typeof prodLib.saveState).toBe("function");
});

test("That prod lib has loadState", () => {
  expect(typeof prodLib.loadState).toBe("function");
});

test("That prod lib has purgeState", () => {
  expect(typeof prodLib.purgeState).toBe("function");
});
