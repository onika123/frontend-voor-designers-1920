

//Gegeven var
var header = document.querySelector('header');
var section = document.querySelector('section');

//URL van JSON file
var requestURL = '/api.json';

//een xmlhttprequest(kan je externe data mee laden) object aanmaken
var request = new XMLHttpRequest();

//request wordt verstuurd
request.open('GET', requestURL);

//data die terug komt is van het type 'json'
request.responseType = 'json';
request.send();

//EVENTUEEL: zet je loader zichtbaar (gif of css animatie)
console.log(request.response)

//onload event listenr van het  xmlhttprequest dding
request.onload = function () {
    var cocktail = request.response;
    console.log(cocktail)
    //EVENTUEEL: zet je loader uit

    //functie aanroepen en json data aan meegeven als parameter
}
