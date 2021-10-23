'use strict';

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function(){
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }},
    detectPersonalLevel: function (){
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
    }},
    writeYourGenres: function(){
        for(let i = 0; i < 3; i++){
            personalMovieDB.genres[i] = prompt(`Жанр який тобі подобається №${i+1}`,'');
            if(personalMovieDB.genres[i] == null || personalMovieDB.genres[i] === ''){
                alert("Not correct answer! Try again!");
                i--;
        }}
        personalMovieDB.genres.forEach((gener, i) => {console.log(`Loves ganer №${i+1} - is ${gener}`)});
    
},
    showMyDB: function(){
        if(!personalMovieDB.privat){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat == false){
            personalMovieDB.privat = true;
        }
        else{personalMovieDB.privat = false}
    }
};

// personalMovieDB.start();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectPersonalLevel();

personalMovieDB.writeYourGenres();

personalMovieDB.showMyDB();

// personalMovieDB.toggleVisibleMyDB();