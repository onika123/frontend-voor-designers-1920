# Frontend voor Designers - opdracht 3: Een interactie uitwerken met externe data

Voor deze opdracht ga je een functionaliteit ontwerpen met externe data. De data is JSON die met een [REST API](https://developer.mozilla.org/en-US/docs/Glossary/REST) van een externe bron wordt ingeladen met Javascript.  Als de data geladen is moeten gebruikers je ontwerp op verschillende manieren kunnen bedienen. Verschillende states zijn vormgeven en worden op het juiste moment getoond.

Lees hier de [opdrachtbeschrijving](./opdrachtbeschrijving.md).


# Project titel
Dit project is een slideshow met de movies in theater uit het jaar 2018. De data die hierbij is gebruikt is ingeladen json data. 
Je kan je door de films heen scrollen d.m.v. de back en next button.

Link:https://onika123.github.io/frontend-voor-designers-1920/opdracht3/

Wat ik wou doen maar niet is gelukt: 

Een filter dropdown functie. Waarbij als je 1 genre selecteerd bijvoorbeeld actie en je hierna op de knop filter klikt dat je dan alleen de films met het genre actie te zien krijgt. Dit is helaas niet gelukt. Ik kwam er niet uit met css en class toevoegen aan de json bestanden. 

## interface
Het interface bestaat uit de titel, 2 buttons (back en next) en de json data die wordt ingeladen met Javascript.

In de demo heb je interface design principles 04, 08, 09 & 11 van Principles of User Interface Design toegepast. Hoe heb je dat gedaan?

Principle 4: keep users in control, voor een gebruiker gebeurd er niks als diegene zelf niet op iets klikt, hierdoor blijft de gebruiker in control. 
Principle 8: Provide a natural next step, als je de titel leest zie je dat er meerdere films te zien zijn. Door de knoppen weet je dat je verder/terug kan gaan in een lijst. 
Principle 9: Appearance follows behavior, de knoppen werken zoals er staat (back & next0
Principle 11: Strong visual hierarchy works best, een duidelijke titel met knoppen waarvan de juiste affordance wordt gegeven. 

In de demo heb je meerdere UI events toegepast. Hoe heb je dat gedaan?
1. Als je op de buttons 'back/next' klikt kan je naar links of rechts navigeren
2. Als je op de pijltjes op je toetsenbord klikt kan je naar links of rechts navigeren

In de demo heb je een aantal states van de UI stack toegepast. Hoe heb je dat gedaan?
De buttons 'back / next'  hebben een blank state, en een hover state.


## code
Bij de code heb ik stukjes tekst uitgecommentarieerd met uitleg over die code. Dit is te vinden in de bestanden html/css/js.
