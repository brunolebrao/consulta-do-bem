import axios from 'axios'

class HomeApi {
    static getCharacters(ts, pb, hash) {
        return new Promise((resolve, reject) => {
            axios.get('https://gateway.marvel.com/v1/public/characters', {
                params: {
                    limit: 50,
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

export default HomeApi;