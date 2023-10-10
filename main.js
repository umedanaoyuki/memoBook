'use strict'
{

    const text = document.querySelector("#text");
    const save = document.querySelector("#save");
    const clear = document.querySelector('#clear')
    const message = document.querySelector("#message");

    if (localStorage.getItem('memo') === null) {
        text.value = '';
    } else {
        text.value = localStorage.getItem('memo');
    }

    clear.addEventListener('click', () => {
        if (confirm('本当に削除しますか？') === true) {
            text.value = '';
            localStorage.removeItem('memo');
        }
    })

    save.addEventListener('click', () => {
        message.classList.add('appear');
        setTimeout( () => {
            message.classList.remove('appear');
        }, 1000)
        localStorage.setItem('memo', text.value);
    });




}