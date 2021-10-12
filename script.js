"use strict"

let numberOfFilms = +prompt("How much films you watched?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastFilm = prompt("One of films you watched the last:", ""),
    ratingLastFilm = +prompt("How do you rate it?", ""),
    lastFilm1 = prompt("One of films you watched the last:", ""),
    ratingLastFilm1 = +prompt("How do you rate it?", "");

    console.log(lastFilm)

personalMovieDB.movies[lastFilm] = ratingLastFilm;
personalMovieDB.movies[lastFilm1] = ratingLastFilm1;

console.log(personalMovieDB);