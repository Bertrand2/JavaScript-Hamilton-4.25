/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const button = document.getElementById("run");
    const yearHTML = document.getElementById("year");
    let date;

    button.addEventListener("click", ()=>{
        let year = yearHTML.value;
        let months = [];
        for (let i=1 ; i<13 ; i++){
            date = new Date(year, i, 13);
            if(date.getDay() == 5){
                months.push(monthNames[i]);
            }
        }
        alert(months);
    })

})();
