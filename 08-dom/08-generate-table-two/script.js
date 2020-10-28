/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const emmanuelmacron = document.createElement("table");
    let aaaaaaaaaaaaaaah;
    let oooooooooooooooh;

    for (let i=0 ; i<10 ; i++) {
        aaaaaaaaaaaaaaah = document.createElement("tr");

        for (let j=0 ; j <10 ; j++) {
            oooooooooooooooh = document.createElement("td");
            oooooooooooooooh.innerText = (i+1)*(j+1);
            aaaaaaaaaaaaaaah.appendChild(oooooooooooooooh);
        }
        emmanuelmacron.appendChild( aaaaaaaaaaaaaaah );
    }
    document.getElementById("target").appendChild(emmanuelmacron);

})();
