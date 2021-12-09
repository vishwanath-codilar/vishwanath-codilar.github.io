const bill = document.getElementById('in_bill');
const tips= document.querySelectorAll('.tip');
const peoples= document.getElementById('in_people')
const errorMsg=document.querySelector('.error_mssg')
const customTips=document.getElementById("custome-tip")
const results=document.querySelectorAll('.value');
const rest=document.querySelector('.reset');



bill.addEventListener('input', setBillvalue);
peoples.addEventListener('input',setNumberOfPeople);
customTips.addEventListener('input',setCustomTip);
tips.forEach(btn =>{
    btn.addEventListener('click',SelectTip);
})
rest.addEventListener('click',reset)


let billValue=0;
var tipValue= 0.15;
var n_people=0;
var tipAmount=0;
var total=0;

function Validation(s){
    let rgx= /^[0-9]*\.?[0-9]*$/;
    return s.match(rgx);
 }
function setBillvalue(){
    if(bill.value.includes(',')){
        bill.value=bill.value.replace(',',".");
    }
    if(!Validation(bill.value)){
       bill.value= bill.value.substring(0, bill.value.length-1)
    }
    billValue=parseFloat(bill.value);
    calculateTip();
}
function SelectTip(event){
    tips.forEach(btn => {
        
        btn.classList.remove('btn-active');

        
        if(event.target.innerHTML == btn.innerHTML){
            btn.classList.add('btn-active');
            tipValue = parseFloat(btn.innerHTML)/100;
            console.log(tipValue);
        }
    });
    customTips.value = '';
    calculateTip();
   
}
function setNumberOfPeople(){
    if(!Validation(peoples.value)){
        peoples.value= peoples.value.substring(0, peoples.value.length-1)
     }
     n_people=parseFloat(peoples.value);
     if(n_people <= 0)
     {
        errorMsg.classList.add('show-error-msg');
        setTimeout(function(){
            errorMsg.classList.remove('show-error-msg');
        }, 3000);
    
     }
     calculateTip();
    }

function setCustomTip(){
    if(!Validation(customTips.value)){
        customTips.value= customTips.value.substring(0, customTips.value.length-1)
     }
     tipValue=parseFloat(customTips.value/100);
    
    console.log(tipValue);
    tips.forEach(btn => {
        btn.classList.remove('btn-active');
    });
    if(customTips.value !== ''){
        calculateTip();
    }
}

function calculateTip(){
    if(peoples.value >= 1){
    tipAmount=billValue * tipValue / n_people;
    console.log(tipAmount);
     total = billValue * (tipValue ) / n_people;
    console.log(total);
    results[0].innerHTML= '$' + tipAmount.toFixed(2);
    results[1].innerHTML ='$' + total.toFixed(2);
        
}
}

function reset(){
    bill.value = '0.0';
    setBillvalue();
     
    tips[2].click();

    peoples.value = '1';
    setNumberOfPeople();
}