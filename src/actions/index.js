/*
 * action types
 */

export const ADD_STORE = 'ADD_STORE'
export const REMOVE_STORE = 'REMOVE_STORE'



/*
 * action creators
 */

export function addStore(newStore) {
  return { type: ADD_STORE,  newStore}
}

export function removeStore(index) {
  return { type: REMOVE_STORE, index }
}

