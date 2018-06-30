import {ADD_STORE, REMOVE_STORE} from '../actions';

const initialState = {
    favStores : []
}


function storesMapReducer(state = initialState, action){
    switch (action.type) {
        case ADD_STORE :
        return{
            ...state,
            favStores: [...state.favStores,action.newStore]
        }
        case REMOVE_STORE:
        return{
            ...state,
            favStores: [
                ...state.favStores.slice(0, action.index),
                ...state.favStores.slice(action.index + 1)
            ],
        }
        default:
        return state   
    }
}

export default storesMapReducer