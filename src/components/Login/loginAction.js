import * as types from './actionTypes'
import loginData from './loginApi'


export const loadData = (ts, login, hash) => {
    return dispatch => {
        return dispatch({
            type: types.GET_DATA_HERO,
            payload: loginData.getDataHero(ts, login, hash)
        })
    }
}

export const setPrivateKey = (privateKey) => (
    {
        type: types.SET_PRIVATE_KEY,
        payload: privateKey
    }
)
export const setPublicKey = (publicKey) => (
    {
        type: types.SET_PUBLIC_KEY,
        payload: publicKey
    }
)
export const setTs = (ts) => (
    {
        type: types.SET_TS,
        payload: ts
    }
)