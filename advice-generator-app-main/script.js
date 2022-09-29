
const dice = document.querySelector('.dice-icon'); 
const id_advice = document.querySelector('#id-advice');
const advice = document.querySelector('#advice');



dice.addEventListener('click', ()=>{
    
    fetch('https://api.adviceslip.com/advice')
    .then((response) => {
        return response.json()
    } )
    .then((data) => {
        let obj = data;
        console.log(obj.slip.id)
    
        id_advice.innerHTML = '#'+obj.slip.id+'';
        advice.innerHTML = '"'+obj.slip.advice+'"';
    
    })    
})