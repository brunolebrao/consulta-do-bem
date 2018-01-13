import * as types from './actionTypes'
import detailApi from './detailApi'

export const getCharactersId = (id, ts, pb, hash) => {
    return dispatch => {
        return dispatch({
            type: types.GET_CHARACTERS_ID,
            payload: detailApi.getCharactersId(id, ts, pb, hash)
        })
    }
}
export const getComics = (id, ts, pb, hash) => {
    return dispatch => {
        return dispatch({
            type: types.GET_COMICS,
            payload: detailApi.getComics(id, ts, pb, hash)
        })
    }
}