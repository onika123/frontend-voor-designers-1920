// var aangemaakt voor count
var count = 0;

//Gegeven var
var header = document.querySelector('header');
var section = document.querySelector('section');

//URL van JSON file
var requestURL = 'https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/movies-in-theaters.json';

//een xmlhttprequest(kan je externe data mee laden) object aanmaken
var request = new XMLHttpRequest();

//request wordt verstuurd
request.open('GET', requestURL);

//data die terug komt is van het type 'json'
request.responseType = 'json';
request.send();

//EVENTUEEL: zet je loader zichtbaar (gif of css animatie)
//console.log(request.response)

//onload event listenr van het  xmlhttprequest dding
request.onload = function () {
    var movies = request.response;

    //EVENTUEEL: zet je loader uit

    //functie aanroepen en json data aan meegeven als parameter
    showMovies(movies)
}

function showMovies(jsonObj) {
    console.log("function showMovies", jsonObj)
    //var heroes = jsonObj['members'];
    console.log(jsonObj['0'])
    for (var i = 0; i < jsonObj.length; i++) {
        //html elementen aanmaken
        var myArticle = document.createElement('article');
        
        //hier aan het article een class met genre toevoegen
        myArticle.setAttribute('class',jsonObj[i].genres[0])

        //h2 element aanmaken en json data koppelen
        var myH2 = document.createElement('h2');
        myH2.textContent = jsonObj[i].title;

        //paragraaf aanmaken en json data koppelen
        var genre = document.createElement('genre');
        genre.textContent = jsonObj[i].genres;

        //paragraaf aanmaken en json data koppelen
        var imdbRating = document.createElement('imdbRating');
        imdbRating.textContent = jsonObj[i].imdbRating;

        //img aanmaken en json data koppelen
        var plaatje = document.createElement('img')
        plaatje.src = jsonObj[i].posterurl;

      
            
        //html element nesten
        myArticle.appendChild(myH2);
        myArticle.appendChild(imdbRating)
        myArticle.appendChild(genre);
        myArticle.appendChild(plaatje);
        
       

        //nieuwe html elementen aan de section in de html gekoppeld
        section.appendChild(myArticle);
    }
}

//var carousel aangemaakt
var backbutton = document.getElementById('backbutton')
var nextbutton = document.getElementById('nextbutton')
var moviecarousel = document.querySelector('section')

//buttons event listerner 
backbutton.addEventListener('click', back)
nextbutton.addEventListener('click', next)

//functies voor de buttons aanmaken
function next() {
    count -= 332;
    moviecarousel.style.transform = `translateX(${count}px)`;
    //console.log('next')
}

function back() {
    count += 332;
    moviecarousel.style.transform = `translateX(${count}px)`;
    //console.log('back')
}




//function filter() {
//if (document.getElementById("dropdowngenres").value === 'Actie') {
//    if (jsonObj[i].genres === 'action') {
//        console.log(jsonObj['genres'])
//    }
//
//
//} else if (document.getElementById("dropdowngenres").value === 'Drama') {
//    console.log('drama')
//} else if (document.getElementById("dropdowngenres").value = 'Comedy') {
//    console.log('comedy')
//} else if (document.getElementById("dropdowngenres").value = 'romance') {
//    console.log('romance')
//}
//    var movies = document.querySelectorAll('.Action')
//    console.log('movies', movies)
//    
//}


// keypress 
document.addEventListener('keydown', pressTerug);
document.addEventListener('keydown', pressVerder);

// functie voor pijltje >
function pressTerug() {
    if (event.keyCode == 39) {
        count -= 332;
        // section van de img transformeert elke keer +332 px
        moviecarousel.style.transform = `translateX(${count}px)`;
    }
}

// functie voor pijltje <
function pressVerder() {
    if (event.keyCode == 37) {
        count += 332;
        // section van de img transformeert elke keer +332 px
        moviecarousel.style.transform = `translateX(${count}px)`;
    }
}
