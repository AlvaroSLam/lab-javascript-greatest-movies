// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movieArray){
    let directors = movieArray.map((elem) => {
        return elem.director
    })
    return directors
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movieArray){ 
    if (movieArray.length === 0){
        return 0
    }
    let movieSteven = movieArray.filter((elem) =>{
       return elem.director === "Steven Spielberg" && elem.genre.includes("Drama")
    })
    return movieSteven.length;
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movieArray){
    if (movieArray.length === 0){
        return 0;
    }

    let average = movieArray.reduce((total, acc) =>{
        return total + acc['rate']/movieArray.length
    }, 0)

    return Number(average.toFixed(2))
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movieArray){
    let averageDrama = movieArray.filter((elem) => {
        return elem.genre.includes("Drama")
    })

    return ratesAverage(averageDrama);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movieArray){
    let cloneArray = JSON.parse(JSON.stringify(movieArray))
    let sortedArr = cloneArray.sort((a, b) =>{
        if (a.year > b.year) {
            return 1;
          } else if (b.year > a.year) {
            return -1;
          } else {
            if (a.title > b.title) {
              return 1;
            } else if (b.title > a.title) {
              return -1;
            }
            return 0;
          }
    })

    return sortedArr
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movieArray){
    let cloneArr = JSON.parse(JSON.stringify(movieArray));

    let sortAlfabetically = cloneArr.sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        } else if (a.title < b.title) {
          return -1;
        } else {
          return 0;
        }
      })

    let twentyArr = sortAlfabetically.map((elem) => {
        return elem.title
    }).slice(0, 20)

   return twentyArr

}


// function orderAlphabetically(movieArray) {
//     let cloneAlphabetically = JSON.parse(JSON.stringify(movieArray))

//     cloneAlphabetically.sort(function(a, b){
//         if (a.title > b.title){
//             return 1
//         }
//         else if (a.title < b.title){
//             return -1
//         }
//         else {
//             return 0
//         }   
//     })

//     let titlesAlphabetically = movieArray.map(function(item){
//         return item.title
//     })
    
//     return titlesAlphabetically.splice(0, 20)
// }


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

//1er if h, else h min


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
