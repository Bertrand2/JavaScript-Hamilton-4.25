/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const opOne = document.getElementById("op-one");
    const opTwo = document.getElementById("op-two");

    document.getElementById("addition").addEventListener("click", function() {
        alert(parseInt(opOne.value)+parseInt(opTwo.value));
    });

    document.getElementById("substraction").addEventListener("click", function() {
        alert(parseInt(opOne.value)-parseInt(opTwo.value));
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        alert(parseInt(opOne.value)*parseInt(opTwo.value));
    });

    document.getElementById("division").addEventListener("click", function() {
        alert(parseInt(opOne.value)/parseInt(opTwo.value));
    });
})();
