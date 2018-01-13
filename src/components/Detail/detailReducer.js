import * as types from './actionTypes'

const initialState = {
    characters:[],
    isFetchingCharacters: false,
    comics:[],
    isFetchingComics:false
}

const detail = (state = initialState, action) => {
    switch (action.type) {
        case `${types.GET_CHARACTERS_ID}_PENDING`:
            return{
                ...state,
                isFetchingCharacters: true,
            }
        case `${types.GET_CHARACTERS_ID}_FULFILLED`:
            return{
                ...state,
                isFetchingCharacters: false,
                characters:action.payload.data.results,
            }
        case `${types.GET_CHARACTERS_ID}_REJECTED`:
            return{
                ...state,
                isFetchingCharacters: false,
                characters:[],
                status: action.payload.status    
            }
        case `${types.GET_COMICS}_PENDING`:
            return{
                ...state,
                isFetchingComics: true,
            }
        case `${types.GET_COMICS}_FULFILLED`:
            return{
                ...state,
                isFetchingComics: false,
                comics:action.payload.data.results,
            }
        case `${types.GET_COMICS}_REJECTED`:
            return{
                ...state,
                isFetchingComics: false,
                comics:[],
                status: action.payload.status    
            }
        default:
            return state
    }
}
export default detail