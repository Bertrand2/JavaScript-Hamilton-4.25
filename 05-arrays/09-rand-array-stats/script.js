/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    

    document.getElementById("run").addEventListener("click", ()=>{
        
        console.time("test");

        let numbers = [...Array(10)].map(x => Math.ceil(Math.random()*100));
        let sum = 0;
    
        for (let i=0 ; i<numbers.length ; i++) {
            document.getElementById(`n-${i+1}`).innerText = numbers[i];
            sum += numbers[i];
        }
        document.getElementById(`min`).innerText = Math.min(...numbers);
        document.getElementById(`max`).innerText = Math.max(...numbers);
        document.getElementById(`sum`).innerText = sum;
        document.getElementById(`average`).innerText = sum/numbers.length;

        console.timeEnd("test");

        
        // console.time("test");

        // let numbers = [...Array(10)].map(x => Math.ceil(Math.random()*100));
    
        // for (let i=0 ; i<numbers.length ; i++) {
        //     document.getElementById(`n-${i+1}`).innerText = numbers[i];
        // }
        // document.getElementById(`min`).innerText = Math.min(...numbers);
        // document.getElementById(`max`).innerText = Math.max(...numbers);
        // document.getElementById(`sum`).innerText = numbers.reduce((acc, val) => acc + val);
        // document.getElementById(`average`).innerText = numbers.reduce((acc, val) => acc + val)/numbers.length;

        // console.timeEnd("test");


    });



})();
