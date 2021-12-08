function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', Move);
    const output = document.getElementById('result');

    function Move(ev){
        const box = ev.target;
        const offset = Math.floor(ev.offsetX / box.clientWidth * 100);

        output.textContent = `${offset}%`;
    }
}