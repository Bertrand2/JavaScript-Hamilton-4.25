/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    const inputs = [...document.querySelectorAll("input")];
    let heroes;

    const insertHero = () => {
        if( !inputs.find((input) => !input.value) ){
            heroes.push({
                "id": heroes.length+1,
                "name": inputs[0].value,
                "alterEgo": inputs[1].value,
                "powers": [inputs[2].value]
            });
        }

        inputs.forEach((input) => {
            if(!input.value) {
                input.style.borderColor = "red";
            } else {
                input.style.borderColor = "silver";
            }
        });
        console.log(heroes);
    }

    /*
    const displayHeroes = () => {
        heroes.forEach((hero) => {
            const clone = document.importNode(template.content, true);
            clone.querySelector(".name").innerText = hero.name;
            clone.querySelector(".alter-ego").innerText = hero.alterEgo;
            clone.querySelector(".powers").innerHTML = hero.abilities.join("</p><p>");
            target.appendChild(clone);
        });
    }
    */

    const asyncHeroes = async (promise) => {
        
        const heroesPromise = await promise.json();
        try {
            heroes = heroesPromise;
            insertHero();
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
            insertHero();
        }

    });

})();
