const button = document.querySelector('button');
const tagColor = document.querySelector('.bg_color span');


const cores = ['#FF00FF', '#008000', '#00FF00', '#808000', '#228B22', '#006400', '#9ACD32', '#6A5ACD', '#191970', '#000080'];

button.addEventListener('click', () => {
    const randomColor = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = randomColor;
    tagColor.innerText = randomColor;
})