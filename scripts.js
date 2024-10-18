// js/scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const dedicateButtons = document.querySelectorAll('.dedicate-btn');
    dedicateButtons.forEach(button => {
        button.addEventListener('click', function() {
            const countSpan = this.parentElement.querySelector('.dedicate-count');
            let count = parseInt(countSpan.innerText);
            count++;
            countSpan.innerText = count;
        });
    });
});
