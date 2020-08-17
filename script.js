"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из просмотренных фильмов?", ""),
      b = prompt("На сколько его оцените?", ""),
      c = prompt("Один из просмотренных фильмов?", ""),
      d = prompt("На сколько его оцените?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);