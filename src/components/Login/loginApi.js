import axios from 'axios'

class LoginApi {
    static getDataHero(ts, login, hash) {
        return new Promise((resolve, reject) => {
            axios.get('https://gateway.marvel.com/v1/public/characters', {
                params: {
                  ts: ts,
                  apikey: login,
                  hash: hash
                }
              })
            .then((res) => {
                resolve({...res.data})
            }).catch((er) => {
                reject({...er.response})
            })
        })
    }
}

export default LoginApi;