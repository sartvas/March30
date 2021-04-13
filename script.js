"use strict";

const personalMovieDB = {
    count: function start() {
        let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (numberOfFilms == ''||numberOfFilms == null || isNaN
            (numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    movies: {},
    actors: {},
    privat: false,
    genres: [],
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Назовите один из последних просмотренных фильмов?'),
                  b = prompt('На сколько оцените его?');
        
            if (a != null && b !=null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        } 
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10 ) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы - киноман!');
        } else {
            console.log('error');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log('Главный объект программы');
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }

            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i + 1} - это ${item}`);
            });
        }
    },
    togleVisibleMyDB: function (priv) {
        if (!priv) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }
};


