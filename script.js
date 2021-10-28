// 'use strict';

// let numberOfFilms;

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function(){
//         numberOfFilms = +prompt('How many films have you watched so far?', '');

//         while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
//             numberOfFilms = +prompt('How many films have you watched so far?', '');
//         }
//     },
//     rememberMyFilms: function(){
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('One of the last films you watched:', ''),
//                   b = prompt('How would you rate this movie?', '');
        
//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }},
//     detectPersonalLevel: function (){
//         if (personalMovieDB.count < 10) {
//             console.log("You watched too few films");
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log("You are a classic movie viewer");
//         } else if (personalMovieDB.count >= 30) {
//             console.log("You are moviegoer");
//         } else {
//             console.log("Eror");
//     }},
//     writeYourGenres: function(){
//         for(let i = 0; i < 3; i++){
//             personalMovieDB.genres[i] = prompt(`Your favorite genre №${i+1}`,'');
//             if(personalMovieDB.genres[i] == null || personalMovieDB.genres[i] === ''){
//                 alert("Not correct answer! Try again!");
//                 i--;
//         }}
//         personalMovieDB.genres.forEach((genre, i) => {console.log(`Loves ganer №${i+1} - is ${genre}`)});
    
// },
//     showMyDB: function(){
//         if(!personalMovieDB.privat){
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function(){
//         if(personalMovieDB.privat == false){
//             personalMovieDB.privat = true;
//         }
//         else{personalMovieDB.privat = false}
//     }
// };

// personalMovieDB.start();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectPersonalLevel();

// personalMovieDB.writeYourGenres();

// personalMovieDB.showMyDB();

// personalMovieDB.toggleVisibleMyDB();

// console.log(parseInt('15px', 10));


// let x = 5;
// alert(x++);


// console.log([]+false+null+true);


// let y = 1;
// let x = y = 2;
// alert(x);


// console.log(2 && 1 && null && 0 && undefined);


// alert(+"Infinity");


// let a = [1, 2, 3];
// let b = [1, 2, 3];

// console.log(a == b);