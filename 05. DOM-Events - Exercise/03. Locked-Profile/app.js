function lockedProfile(){
    Array.from(document.querySelectorAll('.profile button'))
        .forEach(el => el.addEventListener("click", onClick));

    function onClick(e){
        const profile = e.target.parentElement
        const isActive = profile.querySelector('input[type = "radio"][value = "unlock"]').checked;

        if (isActive()){
            const info = profile.querySelector('div')

            if (e.target.textContent == 'Show more'){
                info.style.display = 'block'
                e.target.textContent = "Hide it";
            }else {
                info.style.display = ''
                e.target.textContent = "Show more"
            }
        }
    }
}
