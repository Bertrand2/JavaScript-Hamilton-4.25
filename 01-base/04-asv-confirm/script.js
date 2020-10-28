/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    ask();
})();

function ask(){
    let age = prompt("What's your age?");
    let gender = prompt("What's your gender?");
    let town = prompt("Where do you live?");
    if(confirm(`So you're ${age}, your gender is "${gender}" and you come from ${town}`)){
        return;
    }else{
        ask();
    }
}