/*hartje geklikt */
var image = document.getElementById('hartbutton')
var popup = document.getElementById("myPopup");
var button = document.getElementById('button')
    
button.addEventListener('click', change)

function change() {
    popup.classList.toggle("show");
    image.src = 'images/hartvol.png'

}
