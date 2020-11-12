/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const table = document.createElement("table");

    for (let i=0 ; i<10 ; i++) {
        const aaaaaaaaaaaaaaah = document.createElement("tr");
        aaaaaaaaaaaaaaah.appendChild( document.createElement("td") );
        table.appendChild( aaaaaaaaaaaaaaah );
    }
    document.getElementById("target").appendChild(table);

})();
