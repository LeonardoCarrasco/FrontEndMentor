
// icon sub menu
const icon_one = document.querySelector('#icon-one');
const icon_two = document.querySelector('#icon-two');


const card_hover = document.querySelectorAll('.card-hover');

const column_link = document.querySelectorAll('.column-link');



column_link[0].addEventListener('mouseenter',()=>{

    let el = icon_one.lastChild.lastChild;
    let img_src = 'images/icon-arrow-up.svg';
    el.src= img_src;

    card_hover[0].classList.toggle('open');
    
})

column_link[0].addEventListener('mouseleave',()=>{

    let el = icon_one.lastChild.lastChild;
    let img_src = 'images/icon-arrow-down.svg';
    el.src= img_src;

    card_hover[0].classList.toggle('open');

})


column_link[1].addEventListener('mouseenter',()=>{

    let el = icon_two.lastChild.lastChild;
    let img_src = 'images/icon-arrow-up.svg';
    el.src= img_src;

    card_hover[1].classList.toggle('open');
});

column_link[1].addEventListener('mouseleave',()=>{

    let el = icon_two.lastChild.lastChild;
    let img_src = 'images/icon-arrow-down.svg';
    el.src= img_src;

    card_hover[1].classList.toggle('open');
})



const bar_menu = document.querySelector('.icon-bar');

const capa = document.querySelector('.capa');

const link_container = document.querySelector('.container-logo-links');
const logs = document.querySelector('.logs');

bar_menu.addEventListener('click', ()=>{

    link_container.classList.toggle('menu-open');

    if (link_container.classList.contains('menu-open')) {
        bar_menu.children[0].src = 'images/icon-close-menu.svg';
        capa.classList.add('bckgr-color');

    }else{
        bar_menu.children[0].src = 'images/icon-menu.svg';
        capa.classList.remove('bckgr-color');
    }

    

})
