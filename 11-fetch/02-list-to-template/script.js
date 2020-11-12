/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    const asyncHeroes = async (promise) => {
        
        const heroes = await promise.json();
        try {
            //import template
            const template = document.getElementById("tpl-hero");
            //import target
            const target = document.getElementById("target");

            heroes.forEach((hero) => {
                const clone = document.importNode(template.content, true);
                clone.querySelector(".name").innerText = hero.name;
                clone.querySelector(".alter-ego").innerText = hero.alterEgo;
                clone.querySelector(".powers").innerHTML = hero.abilities.join("</p><p>");
                target.appendChild(clone);
            });
        } catch(e) {
            console.error(e);
        }
    }
    
    const asyncCall = async () => {
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
        
        asyncCall();

    });

})();
