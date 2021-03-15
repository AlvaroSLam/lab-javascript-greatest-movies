//Iteration 1
function getAllDirectors(movieArr){

    return movieArr.map(elem => elem.director)

}

//Iteration 2

function howManyMovies(movieArr){
    let stevenArr = movieArr.filter((elem) => {
        return elem.director === 'Steven Spielberg' && elem.genre.includes('Drama')
    })
    return stevenArr.length
}

//Iteration 3
function ratesAverage(movieArr){
    if (!movieArr.length){
        return 0
    }

    let rates = movieArr.reduce((acc, elem) =>{
        if(elem.rate){
            return acc + elem.rate
        } else {
            return acc
        }
        
    }, 0)
    
    return Number((rates / movieArr.length).toFixed(2))
}

//Iteration 4
function dramaMoviesRate(movieArr){
    let dramaMovies = movieArr.filter((elem) => {
        return elem.genre.includes('Drama')
    })

    return ratesAverage(dramaMovies)
}

//Iteration 5
function orderByYear(movieArr){
    let cloneArr = JSON.parse(JSON.stringify(movieArr))

    cloneArr.sort((a, b) =>{
        if (a.year > b.year){
            return 1
        } else if (a.year < b.year){
            return -1
        } else {
            if(a.title > b.title){
                return 1
            } else if(a.title < b.title){
                return -1
            } else {
                return 0
            }
        }
    })

    return cloneArr
}

//Iteration 6
function orderAlphabetically(movieArr){
    let cloneArr = JSON.parse(JSON.stringify(movieArr))

    cloneArr.sort((a,b) =>{
        if(a.title > b.year){
            return 1
        } else if(a.title < b.title){
            return -1
        } else {
            return 0
        }
    })

    return (cloneArr.map(elem => elem.title)).slice(0, 20)

    

}