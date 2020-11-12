/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    const input = document.querySelector("input");
    let heroes;

    const deleteHero = () => {

        if(input.value) {
            input.style.borderColor = "silver";
            heroes = heroes.filter((hero) => hero.id !== +input.value);
        } else {
            input.style.borderColor = "red";
        }
        console.log(heroes);
    }

    const asyncHeroes = async (promise) => {
        
        const heroesPromise = await promise.json();
        try {
            heroes = heroesPromise;
            deleteHero();
        } catch(e) {
            console.error(e);
        }
    }
    
    const asyncFetch = async () => {
        
        const promise = await fetch("http://localhost:3000/heroes");
        try {

            //check promise status
            if (promise.status !== 200) {
                console.log(`Error ${promise.status}`);
                return;
            }

            asyncHeroes(promise);
        
        } catch(e) {
            console.error(e);
        }
    }

    document.getElementById("run").addEventListener("click", () => {
        
        if(!heroes){
            asyncFetch();
        } else {
            deleteHero();
        }

    });

})();
