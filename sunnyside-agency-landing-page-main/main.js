
const menu_links = document.querySelector('.menu-links');

const brg_btn = document.querySelector('#brg-btn');


brg_btn.addEventListener('click', ()=>{
    menu_links.classList.toggle('active');
})