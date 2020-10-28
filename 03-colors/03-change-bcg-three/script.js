/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    const body = document.getElementsByTagName("body")[0];
    const button = document.getElementById("run");

    function randomColor(){
        return `rgb(${Math.floor(Math.random()*101)},${Math.floor(Math.random()*101)},${Math.floor(Math.random()*101)})`;
    }

    button.addEventListener("click", ()=>{
        body.style.backgroundColor = randomColor();
    });

})();
