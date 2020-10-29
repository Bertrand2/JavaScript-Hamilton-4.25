/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const body = document.getElementsByTagName("body")[0];
    const color = document.getElementById("color");
    

    document.getElementById("run").addEventListener("click", ()=>{
        body.style.backgroundColor = color.value;
    });

})();
