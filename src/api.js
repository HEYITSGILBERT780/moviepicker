//let apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=6c1d4c39dedc68c780df0b0ab7e75f83&language=en-US&include_adult=false&include_video=false&page=1';
let apiUrl = '';
const urlArr = ['&year=', '&with_runtime.gte=', '&with_cast=', '&with_genres=', '&vote_average.gte=', '&with_original_language='];

export function createApiUrl(val) {
    if(val.year !== '') {
        apiUrl += urlArr[0] + val.year;
    }

    if(val.runtime !== '') {
        apiUrl += urlArr[1] + val.runtime;
    }

    if(val.person !== '') {
        apiUrl += apiUrl[2];
        const p = val.person;
        let space;
        let last;
        let id;
        if(p.indexOf(',') !== -1) {
            let personArr = p.split(',');
            personArr.forEach(elem => {
                space = elem.indexOf(' ');
                last = elem.length - 1;
                id = personSec(elem.substr(0, space), elem.substr(space+1, last));

                if (personArr.indexOf(elem) !== personArr.length - 1) {
                    apiUrl += id.toString() + '%2C';
                } else {
                    apiUrl += id.toString();
                }
            });
        } else {
            space = p.indexOf(' ');
            last = p.length - 1;
            id = personSec(p.substr(0, space), p.substr(space+1, last));
            apiUrl += id.toString();
        }
    }

    if(val.genre.length > 1) {
        apiUrl += urlArr[3];
        val.genre.forEach(elem => {
            if (val.genre.indexOf(elem) !== val.genre.length - 1) {
                apiUrl += elem + '%2C';
            } else {
                apiUrl += elem;
            }
        });
    }

    if(val.genre.length === 1) {
        apiUrl += urlArr[3] + val.genre[0];
    }

    if(val.rating !== '') {
        apiUrl += urlArr[4] + val.rating;
    }

    if(val.language !== '') {
        apiUrl += urlArr[5] + val.language;
    }

    return apiUrl;
}

function personSec(firstName, lastName) {
    let personUrl = 'http://api.tmdb.org/3/search/person?api_key=6c1d4c39dedc68c780df0b0ab7e75f83&query=';
    personUrl += firstName + '%20' + lastName;
    
    return fetch(personUrl)
    .then(resp => {
        if(!resp.ok) {
            if(resp.status >= 400 && resp.status < 500) {
                return resp.json().then(data => {
                    let err = {errorMessage: data.message};
                    throw err;
                })
        } else {
            let err = {errorMessage: 'Please try again later, server is not responding'};
            throw err;
        }
    }
        return resp.json();
    })
    .then(data => {
        return data.results[0].id;
    })
    .catch(error => {
        console.log(error);
    })
}