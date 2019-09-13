/**
 * Load a state from local storage
 * @param {string} storageKey - What key in localstorage to load from
 * @returns {Object} - Returns the persisted state
 */
const loadState = (storageKey) => {
  try {
    const serializedState = localStorage.getItem(storageKey);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

module.exports = loadState;
