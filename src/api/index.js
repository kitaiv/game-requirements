import axios from "axios";

const apiKey = '2e0e4e842d3e4ca38d034dad40635f0f'

const baseURL = 'https://api.rawg.io/api/';

// const config = {
//     headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': "http://localhost:3000"
//     }
// }



export async function getData(name = 'games'){
    let data;
    try {
        await axios.get(`${baseURL + name}?key=${apiKey}`)
        .then(res => {
            data = res.data
        })
        .catch(err => console.log(err))
        
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export async function getTestData(){
    try{
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
        const res = axios.get('/assets/data/games.json')
            .then(res => res.data)
            .catch(error => console.log(error))
        await sleep(2000)
        return await res;
    }catch (error){
        throw new Error(error)
    }
}