// Observer reagiert *px später
// Wert > 0: Observer reagiert früher
// Wert < 0: Observer reagiert später
let observer_options_offset = "0px";

// Wie viel % des Objekts mit Observer überschneiden müssen
// Default: 1.0 = 100% 
let observer_options_threshold = 0.3;
let observer_options = {
    rootMargin: `0px 0px ${observer_options_offset} 0px`,
    threshold: observer_options_threshold
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}


// Standard-Code: neuen Observer erstellen
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        //alert('Hallo ich bin da');
        console.log(entry);
        console.log(entry.isIntersecting);
        console.log(entry.target);
        if (entry.isIntersecting) {
            entry.target.classList.add('onscroll_visible')
        } else {
            entry.target.classList.remove('onscroll_visible')
        }
    })
}, observer_options)



// Custom-Code: Elemente mit Element-Selektor picken
// Jedes Element dem Observer zum Überwachen übergeben
const onscroll_elements = document.getElementsByClassName('onscroll_hidden');
for (let i = 0; i < onscroll_elements.length; i++) {
    observer.observe(onscroll_elements[i]);
}


// Custom-Code Variante2 mit QuerySelector und forEach
/*
// Custom-Code: Elemente mit QuerySelector picken
// Jedes Element dem Observer zum Überwachen übergeben 
const onscroll_elements = document.querySelectorAll('.onscroll_hidden');
onscroll_elements.forEach( (el) => {
    observer.observe(el)}
);
*/
