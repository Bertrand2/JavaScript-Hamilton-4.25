/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const opOne = document.getElementById("op-one");
    const opTwo = document.getElementById("op-two");

    const performOperation = operation => {
        let result;
        switch(operation){
            case "addition":
                result = parseInt(opOne.value)+parseInt(opTwo.value);
                break;
            case "substraction":
                result = parseInt(opOne.value)-parseInt(opTwo.value);
                break;
            case "multiplication":
                result = parseInt(opOne.value)*parseInt(opTwo.value);
                break;
            case "division":
                result = parseInt(opOne.value)/parseInt(opTwo.value);
                break;
            default:
                result = "wrong operation selected !";
        }
        alert(result);
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
