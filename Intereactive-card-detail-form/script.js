

function putTheCardNumber(num, numberCardEL){

    let num1 ='' ,num2= '' ,num3= '' ,num4= '';

    for (let i = 1; i < num.length; i++) {
        if (i === 4) {
            let j=0;
            while (j < num.length && j < 4) {
                num1 = num1 + num.charAt(j);
                j++;
            }
        }
        else if(i === 8){
            let j=4;
            while (j < num.length && j < 8) {
                num2 = num2 + num.charAt(j);
                j++;
            }
    
        }
        else if(i === 12){
            let j=8;
            while (j < num.length && j < 12) {
                num3 = num3 + num.charAt(j);
                j++;
            }
    
        }
        else if(i === 15){
            let j=12;
            while (j < num.length && j < 16) {
                num4 = num4 + num.charAt(j);
                j++;            
            }
        }
        
    }

    numberCardEL.children[0].innerHTML= num1;
    numberCardEL.children[1].innerHTML= num2;
    numberCardEL.children[2].innerHTML= num3;
    numberCardEL.children[3].innerHTML= num4;

}



// this Are from the inputs


const divInputs_text = document.querySelector('.inputs-text');
const form_CardName = document.querySelector('#cardholder-name');
const card_number = document.querySelector('#card-number'); // max-lenght 14
const month = document.querySelector('#month'); // max-length 2
const year = document.querySelector('#year'); // max-length 2
const form_cvc = document.querySelector('#cvc'); // max-length 3

const form_btn = document.querySelector('#btn-form');



// item of an array

function checkSpanAlert(item){

    if (item.parentNode.children.length > 1) {

    }
    else{
        let span = document.createElement('span');
        let textnode = document.createTextNode('can`t be blank')
        span.classList.add('cant-be-blank');
        span.appendChild(textnode);

        item.parentNode.appendChild(span);
    }
}

function removeSpanAlert(item){

    if (item.parentNode.children.length > 1) {
 
        let span= item.parentNode.children[1];
        span.remove();
    }

}

function valuesInputs(collection){

    //this are form the card

    const cardNumber = document.querySelector('.card-number');
    const cardName = document.querySelector('.cardholder-name');
    const MM = document.querySelector('#MM');
    const YY = document.querySelector('#YY');
    const CVC = document.querySelector('.cvc-container');    
    
    for (let i = 0; i < collection.length; i++) {
        
        if (collection[i].name === 'cardholder-name') {
            cardName.children[0].innerHTML= collection[i].value;
            
        }
        else if(collection[i].name === 'card-number'){
            putTheCardNumber(collection[i].value, cardNumber);
        }
        else if(collection[i].name === 'month'){
            MM.innerHTML= collection[i].value;
        }
        else if(collection[i].name === 'year'){
            YY.innerHTML= collection[i].value;
        }
        else if(collection[i].name === 'cvc'){
            CVC.children[0].innerHTML= collection[i].value;
        }

    }
}


const arrayInputs = [form_CardName, card_number, month, year, form_cvc];


function validateForm(array){
    let j = 0;
    let findIt = true;

    while (j < array.length && findIt) {

        if (array[j].value === '' || null) {
            findIt = false;
        }
        else{
            j++;
        }
        
    }

    console.log('todo completado? ', findIt)

    for (let i = 0; i < array.length; i++) {

        if ( array[i].value ==='' || null) {

            array[i].classList.add('input-error');

            // CREATE TE ELEMENT AN ADD IT TO THE DIV

            checkSpanAlert(array[i]);

            retornoAll = false;

        }
        else{

            array[i].classList.remove('input-error');
            removeSpanAlert(array[i]);
            
            retornoAll = true;
        }



        //  this check that month is  not > 12 && year not > 40

        if(array[i].name ==='month'){

            if (array[i].value > 12 || array[i].value == '') {
                array[i].value = null;
                checkSpanAlert(array[i]);
                array[i].classList.add('input-error');
                retornoMonth = false;
            }
            else{
                retornoMonth = true;
            }

        }
        else if(array[i].name ==='year'){

            if (array[i].value > 40 || array[i].value == '') {
                array[i].value = null;
                checkSpanAlert(array[i]);
                array[i].classList.add('input-error');
                retornoYear = false;

            }
            else{
                retornoYear = true;
            }

        }

        else if(array[i].name ==='cvc'){

            if (array[i].value <= 0 || array[i].value === '') {
                array[i].value = null;
                checkSpanAlert(array[i]);
                array[i].classList.add('input-error');
                retornocCvc = false;

            }
            else{
                retornocCvc = true;
            }

        }
        else if(array[i].name ==='card-number'){

            if (array[i].value <= 0 || array[i].value === '' || array[i].value.length < 16) {
                array[i].value = null;
                checkSpanAlert(array[i]);
                array[i].classList.add('input-error');
                retornocCard_Number = false;

            }
            else{
                retornocCard_Number = true;
            }

        }

        
    }

    if(retornocCvc && retornoYear && retornoMonth && retornoAll && findIt && retornocCard_Number){
        valuesInputs(array);
        return true;
    }
    else{
        return false
    }

};



form_btn.addEventListener('click', ()=>{
    console.log('click');

    const form = document.querySelector('.form');
    const success_card = document.querySelector('.success');

    validado = validateForm(arrayInputs);
    console.log(validado)
    
    if(validado){
        form.style.display = "none";
        success_card.style.display = "block";
        console.log("todo bien");
    }
    else{
        console.log("todo mal");
    }
    
})