cards.forEach(card => {
    
    const heart = card.querySelector('.fa-heart');
    
    heart.addEventListener('click', () => {
        heart.classList.toggle('active');
    });


});