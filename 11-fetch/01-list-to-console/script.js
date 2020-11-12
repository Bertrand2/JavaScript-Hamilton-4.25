/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    const asyncCall = async () => {
        const promise = await fetch("http://localhost:3000/heroes");
        try {

            //check promise status
            if (promise.status !== 200) {
                console.log(`Error ${promise.status}`);
                return;
            }

            const heroes = await promise.json()
            try {
                console.log(heroes);
            } catch(e) {
                console.error(e);
            }
        
        } catch(e) {
            console.error(e);
        }
    }

    document.getElementById("run").addEventListener("click", () => {
        
        asyncCall();

    });

})();
