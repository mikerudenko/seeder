document.addEventListener('DOMContentLoaded', main)


function main() {
    handleScrollDownButton();
}

function onScrollButtonClick(event) {
    event.preventDefault();
    document.body.scrollTop = this.offsetTop + 100;
}

function handleScrollDownButton() {
    const scrollButtons = document.querySelectorAll('.scroll-down-button');
    
    Array.from(scrollButtons).forEach(function(button){
        button.addEventListener('click', onScrollButtonClick)
    })
}

