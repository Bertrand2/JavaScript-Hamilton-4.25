/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const target = document.getElementById("target");
    const text = [...target.innerText].map(x => `<span>${x}</span>`).join("");
    target.innerHTML = text;
    target.style.visibility = "hidden";

    let jardin = 0;

    const interval = setInterval(revealLetter, 100);
    
    function revealLetter(){
        target.childNodes[jardin++].style.visibility = "visible";
        if(jardin >= target.childNodes.length){
            clearInterval(interval);
        }
    }

})();
