// const input1 = document.querySelector('.input2').value
// console.log(input1)
// const button = document.getElementById('button')
// const button = document.getElementsByClassName('button')
// const button = document.getElementsByTagName('button')
// const input = document.querySelector('#input2')
// console.log(input.value)
// const button = document.querySelector('button')
// button.onclick=function (){
//     input.value=Number(input.value)+5
// }
// function minusFive(){
//     input.value=Number(input.value)-5
// }
// function plusFive(){
//     input.value=Number(input.value)+5
// }
// const buttons= document.querySelectorAll('button')
// buttons[0].style.background = 'red'
// buttons1[1].style.background= 'blue'
// console.log(buttons)
// const input= document.querySelector('#input')
// const button= document.querySelector('button')
// const paragraph= document.querySelectorAll('paragraph')
// console.log(input)
// console.log(button)

// button.onclick= function(){
//     console.log(input.value)
//     paragraph.innerHTML= 'значение:'+input.value
// }
// const buttons=document.querySelectorAll('button')
// for(let i = 0;i < buttons.leigth; i++){
//     buttons[i].innerHTML='кнопка№'+(i+1)
// }
// function sayHello(num){
//     alert('привет от кнопки')
// }
 //Работа с кнопкой
//Получение  по классу
const input1 = document.querySelector('.input2').value
console.log(input1)
//Работа с кнопкой
const button1 = document.querySelector('.button1')
console.log(button1)
let hh = ''
let gg = ''
let jj = ''
console.log(`jj = ${jj}`)
button1.onclick = function(){

    if (jj.includes('+')){
        b = '1'
        gg = gg + b
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
        console.log(gg)
    }else if(jj.includes('-')){
        c = '1'
        gg = gg + c
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
        console.log(gg)
    }
    else if(jj.includes('*')){
        c = '1'
        gg = gg + c
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
        console.log(gg)
    }else if(jj.includes('/')){
        c = '1'
        gg = gg + c
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
        console.log(gg)
    }else{
        a = '1'
        hh = hh + a
        document.querySelector('.input2').value = hh
        console.log(hh)
    }
}
const button2 = document.querySelector('.button2')
console.log(button2)
button2.onclick = function(){

    if (jj.includes('+')){
        b = '2'
        gg = gg + b
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
        console.log(gg)
    }else if(jj.includes('-')){
        c = '2'
        gg = gg + c
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
        console.log(gg)
    }
    else if(jj.includes('*')){
        c = '2'
        gg = gg + c
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
        console.log(gg)
    }else if(jj.includes('/')){
        c = '2'
        gg = gg + c
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
        console.log(gg)
    }else{
        a = '2'
        hh = hh + a
        document.querySelector('.input2').value = hh
        console.log(hh)
    }
}
const button3 = document.querySelector('.button3')
console.log(button3)
button3.onclick = function(){

    if (jj.includes('+')){
        b = '3'
        gg = gg + b
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
        console.log(gg)
    }else if(jj.includes('-')){
        c = '3'
        gg = gg + c
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
        console.log(gg)
    }
    else if(jj.includes('*')){
        c = '3'
        gg = gg + c
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
        console.log(gg)
    }else if(jj.includes('/')){
        c = '3'
        gg = gg + c
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
        console.log(gg)
    }else{
        a = '3'
        hh = hh + a
        document.querySelector('.input2').value = hh
        console.log(hh)
    }

}
const button4 = document.querySelector('.button4')
console.log(button4)
button4.onclick = function(){
   
    if (jj.includes('+')){
        b = '4'
        gg = gg + b
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
        console.log(gg)
    }else if(jj.includes('-')){
        c = '4'
        gg = gg + c
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
        console.log(gg)
    }
    else if(jj.includes('*')){
        c = '4'
        gg = gg + c
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
        console.log(gg)
    }else if(jj.includes('/')){
        c = '4'
        gg = gg + c
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
        console.log(gg)
    }else{
        a = '4'
        hh = hh + a
        document.querySelector('.input2').value = hh
        console.log(hh)
    }
} 
    const button5 = document.querySelector('.button5')
console.log(button5)
button5.onclick = function(){
   
    if (jj.includes('+')){
        b = '5'
        gg = gg + b
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
        console.log(gg)
    }else if(jj.includes('-')){
        c = '5'
        gg = gg + c
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
            gg = gg + c
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
        console.log(gg)
    }else if(jj.includes('*')){   
        c = '5'
        gg = gg + c
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
        console.log(gg)
    }else if(jj.includes('/')){
        c = '5'
        gg = gg + c
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
        console.log(gg)
    }else{
        a = '5'
        hh = hh + a
        document.querySelector('.input2').value = hh
        console.log(hh)
    }
       

    
}
const button6 = document.querySelector('.button6')
console.log(button6)
button6.onclick = function(){
   
    if (jj.includes('+')){
        b = '6'
        gg = gg + b
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
        console.log(gg)
    }else if(jj.includes('-')){
        c = '6'
        gg = gg + c
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
        console.log(gg)
    }
    else if(jj.includes('*')){
        c = '6'
        gg = gg + c
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
        console.log(gg)
    }else if(jj.includes('/')){
        c = '6'
        gg = gg + c
        document.querySelector('.input2').value =`${hh}  ${jj} ${gg}`
        console.log(gg)
    }else{
        a = '6'
        hh = hh + a
        document.querySelector('.input2').value = hh
        console.log(hh)
    }
    
}
const button7 = document.querySelector('.button7')
console.log(button7)
button7.onclick = function(){

    if (jj.includes('+')){
        b = '7'
        gg = gg + b
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
        console.log(gg)
    }else if(jj.includes('-')){
        c = '7'
        gg = gg + c
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
        console.log(gg)
    }
    else if(jj.includes('*')){
        c = '7'
        gg = gg + c
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
        console.log(gg)
    }else if(jj.includes('/')){
        c = '7'
        gg = gg + c
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
        console.log(gg)
    }else{
        a = '7'
        hh = hh + a
        document.querySelector('.input2').value = hh
        console.log(hh)
    }
    
}
const button8 = document.querySelector('.button8')
console.log(button8)
button8.onclick = function(){

    if (jj.includes('+')){
        b = '8'
        gg = gg + b
        document.querySelector('.input2').value =`${hh}  ${jj} ${gg}`
        console.log(gg)
    }else if(jj.includes('-')){
        c = '8'
        gg = gg + c
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
        console.log(gg)
    }
    else if(jj.includes('*')){
        c = '8'
        gg = gg + c
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
        console.log(gg)
    }else if(jj.includes('/')){
        c = '8'
        gg = gg + c
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
        console.log(gg)
    }else{
        a = '8'
        hh = hh + a
        document.querySelector('.input2').value = hh
        console.log(hh)
    }
    
}
const button9 = document.querySelector('.button9')
console.log(button9)
button9.onclick = function(){

    if (jj.includes('+')){
        b = '9'
        gg = gg + b
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
        console.log(gg)
    }else if(jj.includes('-')){
        c = '9'
        gg = gg + c
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
        console.log(gg)
    }
    else if(jj.includes('*')){
        c = '9'
        gg = gg + c
        document.querySelector('.input2').value =`${hh}  ${jj} ${gg}`
        console.log(gg)
    }else if(jj.includes('/')){
        c = '9'
        gg = gg + c
        document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
        console.log(gg)
    }else{
        a = '9'
        hh = hh + a
        document.querySelector('.input2').value = hh
    }



const button0 = document.querySelector('.button0')
console.log(button0)
button0.onclick = function(){
}

if (jj.includes('+')){
    b = '0'
    gg = gg + b
    document.querySelector('.input2').value =`${hh}  ${jj} ${gg}`
    console.log(gg)
}else if(jj.includes('-')){
    c = '0'
    gg = gg + c
    document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
    console.log(gg)
}
else if(jj.includes('*')){
    c = '0'
    gg = gg + c
    document.querySelector('.input2').value = `${hh}  ${jj} ${gg}`
    console.log(gg)
}else if(jj.includes('/')){
    c = '0'
    gg = gg + c
    document.querySelector('.input2').value =`${hh}  ${jj} ${gg}`
    console.log(gg)
}else{
    a = '0'
    hh = hh + a
    document.querySelector('.input2').value = hh
    console.log(hh)
}

}
const buttonPlus = document.querySelector('.buttonPlus')
console.log(buttonPlus)
buttonPlus.onclick = function(){
    
a = '+'
jj = jj + a
document.querySelector('.input2').value = hh , '=' , gg
console.log(hh , jj , gg)


}
const buttonMinus = document.querySelector('.buttonMinus')
console.log(buttonMinus)
buttonMinus.onclick = function(){

a = '-'
jj = jj + a
document.querySelector('.input2').value = hh , jj , gg
console.log(hh , jj , gg)
}
const buttonDelit = document.querySelector('.buttonDelit')
console.log(buttonDelit)
buttonDelit.onclick = function(){

a = '/'
jj = jj + a
document.querySelector('.input2').value = hh , jj , gg
console.log(hh , jj , gg)

}
const buttonUmno = document.querySelector('.buttonUmno')
console.log(buttonUmno)
buttonUmno.onclick = function(){

a = '*'
jj = jj + a
document.querySelector('.input2').value = hh , jj , gg
console.log(hh , jj , gg)

}
const buttonClear = document.querySelector('.buttonClear')
console.log(buttonClear)
buttonClear.onclick = function(){

hh = hh.replace(hh , '')
jj = jj.replace(jj , '') 
gg = gg.replace(gg , '')  
document.querySelector('.input2').value = hh
console.log(hh)

}
const buttonRavno = document.querySelector('.buttonRavno')
console.log(buttonRavno)
buttonRavno.onclick = function(){

if (jj.includes('+')){
    let ravno = Number(hh) + Number(gg) 
    document.querySelector('.input2').value = ravno
    console.log(ravno)
}else if (jj.includes('-')){
    let ravno = Number(hh) - Number(gg) 
    document.querySelector('.input2').value = ravno
    console.log(ravno)
}else if (jj.includes('/')){
    let ravno = Number(hh) / Number(gg) 
    document.querySelector('.input2').value = ravno
    console.log(ravno)
}else if (jj.includes('*')){
    let ravno = Number(hh) * Number(gg) 
    document.querySelector('.input2').value = ravno
    console.log(ravno)
}


}
    

