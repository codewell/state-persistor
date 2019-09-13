/**
 * Save a state to local storage
 * @param {Object} state - State to be persisted
 * @param {string} storageKey - What key in localstorage to save the state to
 */
const saveState = (state, storageKey) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(storageKey, serializedState);
  } catch (error) {
    // Ignore write errors
  }
};

module.exports = saveState;
