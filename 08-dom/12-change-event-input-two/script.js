/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const required = /\d.*\d/;
    const field = document.getElementById("pass-one");

    field.addEventListener("keyup", () => {
        if(field.value.length>=8 && required.test(field.value)) {
            document.getElementById("validity").innerText = "ok";
        } else {
            document.getElementById("validity").innerText = "Not ok";
        }
    });

})();
