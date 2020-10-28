/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  let answer = prompt("You want some cake bruh ?");
  if(answer.toLowerCase()==="yes"){
    alert("Congratulation, but the cake is a lie");
  }else{
    alert("Ok, more for me then !");
  }

})();