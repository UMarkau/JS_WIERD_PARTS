function go() {
    console.log('CLICK!');
}

function pause() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms) {
        console.log(ms - new Date().getTime());
    }
    console.log('FINISHED');
};

pause();
console.log('DONE');

document.addEventListener('click', go);
