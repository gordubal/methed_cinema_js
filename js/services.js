const API_KEY = '2555d6955ee473ed61b0dc69f0ea27ba';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANG = '&language=ru-RU';

///trending/all/day?api_key=<<api_key>>

const getData = url => {
    return fetch(url)
        .then((resp) => {
            if (resp.ok) {
                return resp.json()
            }
            throw `Что-то пошло не так, ошибка ${resp.status}`

        })
        .catch(err => console.error(err))

}



export const getTrends = (type = 'all', period = 'day', page = 1) => {
    const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANG}&page=${page}`
    return getData(url);
    //    const data = await getData('https://jsonplaceholder.typicode.com/todos/1');
    // console.log('data: ', data);
}

export const getTop = async (type, page = 1) => {
    const url = `${BASE_URL}${type}/top_rated?api_key=${API_KEY}${LANG}&page=${page}`;
    return getData(url);
};


export const getPopular = async (type, page = 1) => {
    const url = `${BASE_URL}${type}/popular?api_key=${API_KEY}${LANG}&page=${page}`;
    return getData(url);
};
