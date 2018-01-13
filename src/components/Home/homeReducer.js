import * as types from './actionTypes'

const initialState = {
    characters:[],
    isFetching: false
}

const home = (state = initialState, action) => {
    switch (action.type) {
        case `${types.GET_CHARACTERS}_PENDING`:
            return{
                ...state,
                isFetching: true,
            }
        case `${types.GET_CHARACTERS}_FULFILLED`:
            return{
                ...state,
                isFetching: false,
                characters:action.payload.data.results,
            }
        case `${types.GET_CHARACTERS}_REJECTED`:
            return{
                ...state,
                isFetching: false,
                characters:[],
                status: action.payload.status    
            }
        default:
            return state
    }
}
export default home