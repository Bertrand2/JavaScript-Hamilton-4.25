/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let dobDay;
    let dobMonth;
    let dobYear;
    let birthday;
    let today;
    let noBirthday = 0;
    let age;
    const date = new Date();
    

    document.getElementById("run").addEventListener("click", ()=>{
        noBirthday = 0;
        dobDay = document.getElementById("dob-day").value;
        dobMonth = document.getElementById("dob-month").value;
        dobYear = document.getElementById("dob-year").value;

        birthday = parseInt( dobMonth+""+("0"+dobDay).slice(-2) );
        today = parseInt( date.getMonth()+""+("0"+date.getDate()).slice(-2) );

        console.log(birthday<=today);

        if(birthday<=today){
            noBirthday = 0;
        }else{
            noBirthday = 1;
        }

        console.log(`${date.getFullYear()} - ${dobYear} - ${noBirthday}`)
        age = date.getFullYear() - dobYear - noBirthday;
        alert(age);
    });


})();
