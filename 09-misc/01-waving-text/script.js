/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const target = document.getElementById("target");
    const text = [...target.innerText].map(x => `<span>${x}</span>`).join("");
    let waver = 0;

    target.innerHTML = text;

    setInterval(wave, 100, target);

    function wave(target){

        for (let i=target.childNodes.length-1 ; i>0 ; i--) {
            target.childNodes[i].style.fontSize = target.childNodes[i-1].style.fontSize;
        }
        waver+=0.3;
        target.childNodes[0].style.fontSize = `${2 + Math.sin(waver)}rem`;
    }

    /*
    const target = document.getElementById("target");
    const text = [...target.innerText].map(x => `<span>${x}</span>`).join("");
    target.innerHTML = text;

    const sizes = [10, 12, 15, 18, 20, 18, 15, 12];

    let waver = 0;

    setInterval(wave, 100, target);

    function wave(target){
        target.childNodes.forEach( (x,i) => {
            x.style.fontSize = `${sizes[(i + waver) % sizes.length]}px`;
        });
        waver++;
    }
    */

})();
