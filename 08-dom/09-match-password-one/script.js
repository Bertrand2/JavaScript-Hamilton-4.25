/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const passOne = document.getElementById("pass-one");
    const passTwo = document.getElementById("pass-two");
    

    document.getElementById("run").addEventListener("click", () => {
        if(passOne.value !== passTwo.value){
            passOne.style.borderColor = "red";
            passTwo.style.borderColor = "red";
        }else{
            passOne.style.borderColor = "silver";
            passTwo.style.borderColor = "silver";
        }
    });

})();
