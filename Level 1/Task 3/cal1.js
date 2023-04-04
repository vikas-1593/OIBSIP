let celsiusInput = document.querySelector(".celsius input[name= 'celsius']")
let fahrenheitInput = document.querySelector(".farhenheit input[name='farhenheit']")
let kelvinInput = document.querySelector(".kelvin input[name='kelvin']")

let btn=document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

celsiusInput.addEventListener('input',function(){
    let cTemp= parseFloat(celsiusInput.value)
    let fTemp=(cTemp * (9/5))+32
    let kTemp=cTemp+273.15

    fahrenheitInput.value=roundNumber(fTemp)
    kelvinInput.value=roundNumber(kTemp)
})

fahrenheitInput.addEventListener('input',function(){
    let fTemp= parseFloat(fahrenheitInput.value)
    let cTemp=(fTemp-32)*(5/9)
    let kTemp=cTemp+273.15

    celsiusInput.value=roundNumber(cTemp)
    kelvinInput.value=roundNumber(kTemp)
})


kelvinInput.addEventListener('input',function(){
    let kTemp= parseFloat(kelvinInput.value)
    let cTemp=kTemp-273.15
    let fTemp=(cTemp * (9/5))+32

    fahrenheitInput.value=roundNumber(fTemp)
    celsiusInput.value=roundNumber(cTemp)
})

btn.addEventListener('click',()=>{
    celsiusInput.value=""
    fahrenheitInput.value=" "
    kelvinInput.value=" "
})