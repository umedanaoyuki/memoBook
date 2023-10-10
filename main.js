'use strict'
{

    const text = document.querySelector("#text");
    const save = document.querySelector("#save");
    const message = document.querySelector("#message");

    if (localStorage.getItem('memo') === null) {
        text.value = '';
    } else {
        text.value = localStorage.getItem('memo');
    }
    
    save.addEventListener('click', () => {
        message.classList.add('appear');
        setTimeout( () => {
            message.classList.remove('appear');
        }, 1000)
        localStorage.setItem('memo', text.value);
    });


}