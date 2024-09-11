
const form = document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const weight=parseInt(document.querySelector('#weight').value);
    const height=parseInt(document.querySelector('#height').value);
    const result = document.querySelector('.result');
    const showText = document.querySelector('.show-text')
    const bmi= (weight/((height*height)/10000));
    result.innerHTML= `Your BMI is ${bmi.toFixed(2)} kg/m<sup>2</sup>`


    if(bmi<18.5){
        showText.innerHTML='Underweight';
        showText.style.color='#009DAC';
        result.style.color ='#009DAC';
    }
    else if(bmi>=18.5&&bmi<=24.9)
    {
        showText.innerHTML ='Normal';
        showText.style.color='#7DBD4C';
        result.style.color ='#7DBD4C';

        
    }
    else if(bmi>=25&&bmi<=29.9)
    {
        showText.innerHTML ='Overweight';
        showText.style.color='#FAAE2A';
        result.style.color ='#FAAE2A';
        
    }
    else if(bmi>=30&&bmi<=34.9)
    {
        showText.innerHTML ='Obesity';
        showText.style.color='#EB853C';
        result.style.color ='#EB853C';
    }
    else{
        showText.innerHTML ='Extreme Obesity';
        showText.style.color='#E5433A';
        result.style.color ='#E5433A';


    }
    


    

})