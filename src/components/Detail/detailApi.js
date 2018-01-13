import axios from 'axios'

class DetailApi {
    static getCharactersId(id, ts, pb, hash) {
        return new Promise((resolve, reject) => {
            axios.get(`https://gateway.marvel.com/v1/public/characters/${id}`, {
            params: {
                ts: ts,
                apikey: pb,
                hash: hash
                }
            })
            .then((res) => {
                resolve({...res.data})
            })
            .catch((er) => {
                reject({...er.response})
            })
        })
    }

    static getComics(id, ts, pb, hash) {
        return new Promise((resolve, reject) => {
            axios.get(`https://gateway.marvel.com/v1/public/characters/${id}/comics`, {
            params: {
                ts: ts,
                apikey: pb,
                hash: hash
                }
            })
            .then((res) => {
                resolve({...res.data})
            })
            .catch((er) => {
                reject({...er.response})
            })
        })
    }
}

export default DetailApi;