/**
 * Remove everything from local storage
 * @param {string} storageKey - What key in localstorage to purge
 */
const purgeState = storageKey => {
  try {
    localStorage.removeItem(storageKey);
  } catch (error) {
    // Ignore write errors
  }
};

export default purgeState;
