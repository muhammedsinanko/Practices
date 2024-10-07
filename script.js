const card = document.getElementById('blog-card');
const cardTitle = document.getElementById('card-title');
card.addEventListener('mouseenter', () => {
    cardTitle.style.color = '#f4d04e';
    
});
card.addEventListener('mouseleave',() => {
    cardTitle.style.color='black'
})