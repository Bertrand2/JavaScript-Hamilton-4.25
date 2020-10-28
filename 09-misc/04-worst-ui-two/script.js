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

    const partOne = document.getElementById("part-one");
    const partTwo = document.getElementById("part-two");
    const partThree = document.getElementById("part-three");
    const partFour = document.getElementById("part-four");

    partOne.addEventListener("click", () => {
        partOne.innerText===partOne.getAttribute("data-max") ? partOne.innerText = partOne.getAttribute("data-min") : ++partOne.innerText ;
        partOne.innerText = ("0"+partOne.innerText).slice(-2);
        updateDisplay();
    });
    partTwo.addEventListener("click", () => {
        partTwo.innerText===partTwo.getAttribute("data-max") ? partTwo.innerText = partTwo.getAttribute("data-min") : ++partTwo.innerText ;
        partTwo.innerText = ("0"+partTwo.innerText).slice(-2);
        updateDisplay();
    });
    partThree.addEventListener("click", () => {
        partThree.innerText===partThree.getAttribute("data-max") ? partThree.innerText = partThree.getAttribute("data-min") : ++partThree.innerText ;
        partThree.innerText = ("0"+partThree.innerText).slice(-2);
        updateDisplay();
    });
    partFour.addEventListener("click", () => {
        partFour.innerText===partFour.getAttribute("data-max") ? partFour.innerText = partFour.getAttribute("data-min") : ++partFour.innerText ;
        partFour.innerText = ("0"+partFour.innerText).slice(-2);
        updateDisplay();
    });

    function updateDisplay(){
        document.getElementById("target").innerText = `+${("0"+partOne.innerText).slice(-2)}${("0"+partTwo.innerText).slice(-2)}${("0"+partThree.innerText).slice(-2)}${("0"+partFour.innerText).slice(-2)}`;
    }

})();
