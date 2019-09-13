# @codewell/state-persistor
Minimalistic state persistor for front end applications with localstorage.

## Installation
```bash
npm install @codewell/state-persistor
```

## Basic usage
```JavaScript
import { saveState, loadState, purgeState } from '@codewell/state-persistor';

const state = {}; // Some state
const STORAGE_KEY = 'myCoolUniqueApplicationStorageKey'; // Unique key to store the state in localstorage

// Persist the state
saveState(state, STORAGE_KEY);

// Get the persisted state
const loadedState = loadState(STORAGE_KEY);

// Clear any saved state
purgeState(STORAGE_KEY);
```