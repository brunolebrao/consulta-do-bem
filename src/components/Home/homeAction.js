import * as types from './actionTypes'
import homeApi from './homeApi'

export const getCharacters = (ts, pb, hash) => {
    return dispatch => {
        return dispatch({
            type: types.GET_CHARACTERS,
            payload: homeApi.getCharacters(ts, pb, hash)
        })
    }
}