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

    const inputs = [...document.querySelectorAll("input")];
    const buttons = [...document.querySelectorAll("button")];

    const intervalTime = 40;

    let running = [...Array(4)].map(x => true);
    let display = ["___", "__", "__", "__";
    let intervals = [
        setInterval(slotMachine, 50, partOne),
        setInterval(slotMachine, 50, partTwo),
        setInterval(slotMachine, 50, partThree),
        setInterval(slotMachine, 50, partFour)
    ];
    updateDisplay();

    buttons.forEach((button,i) => {
        button.addEventListener("click", () => {
            if(running[i]){
                clearInterval(intervals[i]);
                partOneDisplay = partOne.value;
                updateDisplay();
                oneRunning = false;
                fixPartOne.innerHTML = "Start";
            }else{
                partOneDisplay = "___";
                updateDisplay();
                oneRunning = true;
                fixPartOne.innerHTML = "Stop";
                intervals[0] = setInterval(slotMachine, intervalTime, partOne);
            }
        });
    });

    fixPartOne.addEventListener("click", () => {
        if(oneRunning){
            clearInterval(intervals[0]);
            //partOne.value = generateValue(+partOne.getAttribute("data-min"), +partOne.getAttribute("data-max"), 3);
            partOneDisplay = partOne.value;
            updateDisplay();
            oneRunning = false;
            fixPartOne.innerHTML = "Start";
        }else{
            partOneDisplay = "___";
            updateDisplay();
            oneRunning = true;
            fixPartOne.innerHTML = "Stop";
            intervals[0] = setInterval(slotMachine, intervalTime, partOne);
        }
    });

    fixPartTwo.addEventListener("click", () => {
        if(twoRunning){
            clearInterval(intervals[1]);
            //partTwo.value = generateValue(+partTwo.getAttribute("data-min"), +partTwo.getAttribute("data-max"), 2);
            partTwoDisplay = partTwo.value;
            updateDisplay();
            twoRunning = false;
            fixPartTwo.innerHTML = "Start";
        }else{
            partTwoDisplay = "___";
            updateDisplay();
            twoRunning = true;
            fixPartTwo.innerHTML = "Stop";
            intervals[1] = setInterval(slotMachine, intervalTime, partTwo);
        }
    });

    fixPartThree.addEventListener("click", () => {
        if(threeRunning){
            clearInterval(intervals[2]);
            //partThree.value = generateValue(+partThree.getAttribute("data-min"), +partThree.getAttribute("data-max"), 2);
            partThreeDisplay = partThree.value;
            updateDisplay();
            threeRunning = false;
            fixPartThree.innerHTML = "Start";
        }else{
            partThreeDisplay = "___";
            updateDisplay();
            threeRunning = true;
            fixPartThree.innerHTML = "Stop";
            intervals[2] = setInterval(slotMachine, intervalTime, partThree);
        }
    });

    fixPartFour.addEventListener("click", () => {
        if(fourRunning){
            clearInterval(intervals[3]);
            //partFour.value = generateValue(+partFour.getAttribute("data-min"), +partFour.getAttribute("data-max"), 2);
            partFourDisplay = partFour.value;
            updateDisplay();
            fourRunning = false;
            fixPartFour.innerHTML = "Start";
        }else{
            partFourDisplay = "___";
            updateDisplay();
            fourRunning = true;
            fixPartFour.innerHTML = "Stop";
            intervals[3] = setInterval(slotMachine, intervalTime, partFour);
        }
    });

    function updateDisplay(){
        document.getElementById("target").innerText = `+0${("0"+partOneDisplay).slice(-3)}${("0"+partTwoDisplay).slice(-2)}${("0"+partThreeDisplay).slice(-2)}${("0"+partFourDisplay).slice(-2)}`;
    }

    function generateValue(min, max, length){
        let randomNumber = min + Math.floor( Math.random()*(max-min+1));
        randomNumber = ("0"+randomNumber).slice(-length);
        return randomNumber;
    }

    function slotMachine(part){
        part.getAttribute("data-max")==part.value ? part.value = part.getAttribute("data-min") : part.value++;
    }
})();
