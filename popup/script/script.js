function abrirPopup(){
    const popup = document.getElementById('modal-popup')
    popup.classList.add('invisivel')

    popup.addEventListener('click', (e) => {
        if(e.target.id == 'fecharPopup' || e.target.id == 'modal-popup'){
            popup.classList.remove('invisivel')
        }
    })
}