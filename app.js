console.log("In javaScript");
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let x = setInterval( blurring , 30);
let load = 0;

function blurring() {
    load++;
    
    if ( load > 99 ) {
        clearInterval(x);
    }
    
    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0 , 100 , 1 , 0);

    bg.style.filter = `blur(${scale(load , 0 , 100 , 30 , 0)}px)`;
}


function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}