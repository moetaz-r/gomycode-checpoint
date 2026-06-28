cards.forEach(card => {
    
    const deleteBtn = card.querySelector('.fa-trash-alt');

    deleteBtn.addEventListener('click', () => {
        total.innerHTML = parseInt(total.innerHTML) - parseInt(card.querySelector('.quantity').innerHTML) * parseInt(card.querySelector('.unit-price').innerHTML);

        card.style.display = 'none';

        quantity.innerHTML = 0;
    });

});
