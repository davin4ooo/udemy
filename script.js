"use strict"

const numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?", "");


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i > 2; i++) {
    const a = prompt("Один из просмотренных фильмов?", ""),
          b = prompt("На сколько его оцените?", "");
     
    personalMovieDB.movies[a] = b;      
}

console.log(personalMovieDB);