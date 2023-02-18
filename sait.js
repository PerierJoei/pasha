var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');
var input3 = document.querySelector('#input3');
var input4 = document.querySelector('#input4');
var input5 = document.querySelector('#input5');

var button1 = document.querySelectorAll('.button1');
var button13 = document.querySelectorAll('.button13');
let obj1={

}
for (var i = 0; i < button1.length; i++) {
    button1[i].addEventListener('click', function() {
        if (input1.value !== '') {
            console.log('1НЕ пустой');
            obj1.Название = document.querySelector('.input1').value
            document.querySelector('.input1').value = ''
            document.getElementById("name").innerHTML = obj1.Название
        }else{
            alert('Не заполнена строка с Названием');
        }
        if (input2.value !== '') {
            console.log('2НЕ пустой');
            obj1.Цена = document.querySelector('.input2').value
            document.querySelector('.input2').value = ''
            document.getElementById("price").innerHTML =   'Цена:' + obj1.Цена
        }else{
            alert('Не заполнена строка с Ценой');
        }
        if (input3.value !== '') {
            console.log('3НЕ пустой');
            obj1.Количество = document.querySelector('.input3').value
            document.querySelector('.input3').value = ''
            document.getElementById("amount").innerHTML = 'Количество:' + obj1.Количество
        }else{
            alert('Не заполнена строка с Количеством');
        }
        if (input4.value !== '') {
            console.log('4НЕ пустой');
            obj1.Артикул = document.querySelector('.input4').value
            document.querySelector('.input4').value = ''
            document.getElementById("vendor_code").innerHTML =  'Артикул:' + obj1.Артикул
        }else{
            alert('Не заполнена строка с Артикyлом');
        }
        if (input5.value !== '') {
            console.log('5НЕ пустой');
            obj1.Описание = document.querySelector('.input5').value
            document.querySelector('.input5').value = ''
            document.getElementById("description").innerHTML = 'Описание:' + obj1.Описание
        }else{
            alert('Не заполнена строка с Описанием');
        }
        const tovar1 = document.querySelector('.tovar1')
        document.getElementById('text8').style.display = 'none'
        document.getElementById("tovar1").style.display = "block";
        document.getElementById("button1").style.display = "none";
        document.getElementById("button13").style.display = "block";
        console.log(obj1)
    })
}
for (var i = 0; i < button13.length; i++) {
    button13[i].addEventListener('click', function() {
        if (input1.value !== '') {
            console.log('1НЕ пустой');
            obj1.Название2 = document.querySelector('.input1').value
            document.querySelector('.input1').value = ''
            document.getElementById("name2").innerHTML = obj1.Название2
        }else{
            alert('Не заполнена строка с Названием');
        }
        if (input2.value !== '') {
            console.log('2НЕ пустой');
            obj1.Цена2 = document.querySelector('.input2').value
            document.querySelector('.input2').value = ''
            document.getElementById("price2").innerHTML =   'Цена:' + obj1.Цена2
        }else{
            alert('Не заполнена строка с Ценой');
        }
        if (input3.value !== '') {
            console.log('3НЕ пустой');
            obj1.Количество2 = document.querySelector('.input3').value
            document.querySelector('.input3').value = ''
            document.getElementById("amount2").innerHTML = 'Количество:' + obj1.Количество2
        }else{
            alert('Не заполнена строка с Количеством');
        }
        if (input4.value !== '') {
            console.log('4НЕ пустой');
            obj1.Артикул2 = document.querySelector('.input4').value
            document.querySelector('.input4').value = ''
            document.getElementById("vendor_code2").innerHTML =  'Артикул:' + obj1.Артикул2
        }else{
            alert('Не заполнена строка с Артикyлом');
        }
        if (input5.value !== '') {
            console.log('5НЕ пустой');
            obj1.Описание2 = document.querySelector('.input5').value
            document.querySelector('.input5').value = ''
            document.getElementById("description2").innerHTML = 'Описание:' + obj1.Описание2
        }else{
            alert('Не заполнена строка с Описанием');
        }
        const tovar2 = document.querySelector('.tovar2')
        document.getElementById("tovar2").style.display = "block";
    })
}
const button2 = document.querySelector('.button2')
button2.onclick = function(){
    document.querySelector('.input1').value = ''
    document.querySelector('.input2').value = ''
    document.querySelector('.input3').value = ''
    document.querySelector('.input4').value = ''
    document.querySelector('.input5').value = ''
    delete obj1.Название
    delete obj1.Цена
    delete obj1.Количество
    delete obj1.Артикул
    delete obj1.Описание
    document.getElementById('tovar1').style.display = 'none'
    document.getElementById("text8").style.display = "block";
    document.getElementById('button1').style.display = "block";
    document.getElementById("button5").style.display = 'none'
    console.log(obj1)
}
const button3 = document.querySelector('.button3')
button3.onclick = function(){
    delete obj1.Название
    delete obj1.Цена
    delete obj1.Количество
    delete obj1.Артикул
    delete obj1.Описание
    document.getElementById('tovar1').style.display = 'none'
    if(obj1.Название2 == ''){
        document.getElementById("text8").style.display = "block";
    }
    console.log(obj1)
}
const button3_2 = document.querySelector('.button3_2')
button3_2.onclick = function(){
    delete obj1.Название2
    delete obj1.Цена2
    delete obj1.Количество2
    delete obj1.Артикул2
    delete obj1.Описание2
    document.getElementById('tovar2').style.display = 'none'
    document.getElementById("text8").style.display = "block";
    console.log(obj1)
}
const button4 = document.querySelector('.button4')
button4.onclick = function(){
    document.querySelector('.input1').value = obj1.Название
    document.querySelector('.input2').value = obj1.Цена
    document.querySelector('.input3').value = obj1.Количество
    document.querySelector('.input4').value = obj1.Артикул
    document.querySelector('.input5').value = obj1.Описание
    console.log(obj1)
    document.getElementById('button1').style.display = 'none'
    document.getElementById("button5").style.display = "block";
}
const button4_2 = document.querySelector('.button4_2')
button4_2.onclick = function(){
    document.querySelector('.input1').value = obj1.Название2
    document.querySelector('.input2').value = obj1.Цена2
    document.querySelector('.input3').value = obj1.Количество2
    document.querySelector('.input4').value = obj1.Артикул2
    document.querySelector('.input5').value = obj1.Описание2
    console.log(obj1)
    document.getElementById('button1').style.display = 'none'
    document.getElementById('button13').style.display = 'none'
    document.getElementById("button51").style.display = "block";
}
const button5 = document.querySelector('.button5')
button5.onclick = function(){
        console.log('1НЕ пустой');
        obj1.Название = document.querySelector('.input1').value
        document.querySelector('.input1').value = ''
        document.getElementById("name").innerHTML = obj1.Название
        console.log('2НЕ пустой');
        obj1.Цена = document.querySelector('.input2').value
        document.querySelector('.input2').value = ''
        document.getElementById("price").innerHTML =   'Цена:' + obj1.Цена
        console.log('3НЕ пустой');
        obj1.Количество = document.querySelector('.input3').value
        document.querySelector('.input3').value = ''
        document.getElementById("amount").innerHTML = 'Количество:' + obj1.Количество
        console.log('4НЕ пустой');
        obj1.Артикул = document.querySelector('.input4').value
        document.querySelector('.input4').value = ''
        document.getElementById("vendor_code").innerHTML =  'Артикул:' + obj1.Артикул
        console.log('5НЕ пустой');
        obj1.Описание = document.querySelector('.input5').value
        document.querySelector('.input5').value = ''
        document.getElementById("description").innerHTML = 'Описание:' + obj1.Описание
    const tovar1 = document.querySelector('.tovar1')
    document.getElementById('text8').style.display = 'none'
    document.getElementById("tovar1").style.display = "block";
    console.log(obj1)
    document.getElementById('button1').style.display = "block";
    document.getElementById("button5").style.display = 'none'
}
const button51 = document.querySelector('.button51')
button51.onclick = function(){
        console.log('1НЕ пустой');
        obj1.Название2 = document.querySelector('.input1').value
        document.querySelector('.input1').value = ''
        document.getElementById("name2").innerHTML = obj1.Название2
        console.log('2НЕ пустой');
        obj1.Цена2 = document.querySelector('.input2').value
        document.querySelector('.input2').value = ''
        document.getElementById("price2").innerHTML =   'Цена:' + obj1.Цена2
        console.log('3НЕ пустой');
        obj1.Количество2 = document.querySelector('.input3').value
        document.querySelector('.input3').value = ''
        document.getElementById("amount2").innerHTML = 'Количество:' + obj1.Количество2
        console.log('4НЕ пустой');
        obj1.Артикул2 = document.querySelector('.input4').value
        document.querySelector('.input4').value = ''
        document.getElementById("vendor_code2").innerHTML =  'Артикул:' + obj1.Артикул2
        console.log('5НЕ пустой');
        obj1.Описание2 = document.querySelector('.input5').value
        document.querySelector('.input5').value = ''
        document.getElementById("description2").innerHTML = 'Описание:' + obj1.Описание2
        document.getElementById('text8').style.display = 'none'
        document.getElementById("tovar2").style.display = "block";
        console.log(obj1)
        document.getElementById('button1').style.display = "block";
        document.getElementById("button51").style.display = 'none'
}