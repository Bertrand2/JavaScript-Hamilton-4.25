/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
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

    document.getElementById("fix-part-one").addEventListener("click", () => {
        partOne.value = +partOne.getAttribute("data-min") + Math.floor( Math.random()*(partOne.getAttribute("data-max")-partOne.getAttribute("data-min")+1));
        partOne.value = ("0"+partOne.value).slice(-3);
        updateDisplay();
    });

    document.getElementById("fix-part-two").addEventListener("click", () => {
        partTwo.value = +partTwo.getAttribute("data-min") + Math.floor( Math.random()*(partTwo.getAttribute("data-max")-partTwo.getAttribute("data-min")+1));
        partTwo.value = ("0"+partTwo.value).slice(-2);
        updateDisplay();
    });

    document.getElementById("fix-part-three").addEventListener("click", () => {
        partThree.value = +partThree.getAttribute("data-min") + Math.floor( Math.random()*(partThree.getAttribute("data-max")-partThree.getAttribute("data-min")+1));
        partThree.value = ("0"+partThree.value).slice(-2);
        updateDisplay();
    });

    document.getElementById("fix-part-four").addEventListener("click", () => {
        partFour.value = +partFour.getAttribute("data-min") + Math.floor( Math.random()*(partFour.getAttribute("data-max")-partFour.getAttribute("data-min")+1));
        partFour.value = ("0"+partFour.value).slice(-2);
        updateDisplay();
    });

    function updateDisplay(){
        document.getElementById("target").innerText = `+${("0"+partOne.value).slice(-3)}${("0"+partTwo.value).slice(-2)}${("0"+partThree.value).slice(-2)}${("0"+partFour.value).slice(-2)}`;
    }
})();
