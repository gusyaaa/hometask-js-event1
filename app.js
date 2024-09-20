let btns = document.querySelectorAll(".shopping-list button");

btns.forEach(button => {
    button.addEventListener('click', function() {
        this.style.color = this.style.color === 'lightgray' ? 'black' : 'lightgray';
    })
})