import Library from 'axios'


let http = Library.create({
    baseURL: 'http://localhost:8080'
});


const GET = (url, params, toast = false, loading = false) => {
    return new Promise((resolve, rejected) => {
        http.get(
            url)
            .then(rawResponse => {
                resolve(rawResponse.data);
            })
            .catch(error => {
                console.log(error)
                rejected(error);
            })
            .finally(() => {
            })
    });
};

const POST = (url, data, toast = false, loading = false) => {
    return new Promise((resolve, rejected) => {
        http.post(url, data, )
            .then(rawResponse => {
                resolve(rawResponse.data);
            })
            .catch(error => {
                rejected(error);
            })
            .finally(() => {
            })
    });
};
export default {
    GET,POST
}