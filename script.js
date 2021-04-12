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
    actors: {},
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
    writeYoueGeneres: function () {
        for (let i = 0; i <= 3; i++) {
            personalMovieDB.genres[i] = prompt (`Ваш любимый жанр по номером ${i+1}`);
            let counts1 = 0;
            personalMovieDB.genres.forEach((personalMovieDB.genres[i]) => {
                console.log(element);
            })
        },
    },
    privat: false,
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log('Главный объект программы');
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

personalMovieDB.count();
personalMovieDB.writeYoueGeneres();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.togleVisibleMyDB(personalMovieDB.privat);
console.log(personalMovieDB.privat);

