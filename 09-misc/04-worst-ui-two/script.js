/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const parts = [
        document.getElementById("part-one"),
        document.getElementById("part-two"),
        document.getElementById("part-three"),
        document.getElementById("part-four")
    ];

    parts.forEach( (x,i) => x.addEventListener("click", () => {
        x.innerText===x.getAttribute("data-max") ? x.innerText = x.getAttribute("data-min") : ++x.innerText ;
        x.innerText = i ? ("0"+x.innerText).slice(-2) : ("0"+x.innerText).slice(-3);
        updateDisplay();
    }));

    function updateDisplay(){
        document.getElementById("target").innerText = `+${parts[0].innerText}${parts[1].innerText}${parts[2].innerText}${parts[3].innerText}`;
    }

})();
