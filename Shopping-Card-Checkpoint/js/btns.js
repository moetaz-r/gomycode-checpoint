const cards = document.querySelectorAll('.card');
const total = document.querySelector('.total');

cards.forEach(card => {
    const plusBtn = card.querySelector('.fa-plus-circle');
    const minusBtn = card.querySelector('.fa-minus-circle');
    const num = card.querySelector('.quantity');
    const unitPrice = card.querySelector('.unit-price');


    plusBtn.addEventListener('click', () => {
        num.innerHTML = parseInt(num.innerHTML) + 1;
        total.innerHTML = parseInt(total.innerHTML) + parseInt(unitPrice.innerHTML);
    });

    minusBtn.addEventListener('click', () => {
        if (parseInt(num.innerHTML) > 0) {
            num.innerHTML = parseInt(num.innerHTML) - 1;
            total.innerHTML = parseInt(total.innerHTML) - parseInt(unitPrice.innerHTML);
        }
    });
});