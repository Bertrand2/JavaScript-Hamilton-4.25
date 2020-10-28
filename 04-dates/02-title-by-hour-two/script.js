/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const text = document.getElementById("target");
    const date = new Date();

    if( date.getHours()+date.getMinutes()/60 < 17.5 ){
        text.innerText = "Hello !";
    }else{
        text.innerText = "Good Evening !";
    }

})();
