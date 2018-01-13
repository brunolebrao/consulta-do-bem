import * as types from './actionTypes'

const initialState = {
    data: [],
    isFetching: false,
    status: null,
    privateKey: '',
    publicKey: '',
    ts: null
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case `${types.GET_DATA_HERO}_PENDING`:
            return{
                ...state,
                isFetching: true,
            }
        case `${types.GET_DATA_HERO}_FULFILLED`:
            return{
                ...state,
                isFetching: false,
                data:action.payload.data.results,
                status: action.payload.code    
            }
        case `${types.GET_DATA_HERO}_REJECTED`:
            return{
                ...state,
                isFetching: false,
                data:[],
                status: action.payload.status    
            }
        case types.SET_PRIVATE_KEY:
            return{
                ...state,
                privateKey: action.payload
            }
        case types.SET_PUBLIC_KEY:
            return{
                ...state,
                publicKey: action.payload
            }
        case types.SET_TS:
            return{
                ...state,
                ts: action.payload
            }
        default:
            return state
    }
}
export default login