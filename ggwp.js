//Работа со строками JS

//let stroka = "abcd1234"
//литеральные кавычки ``
// let stroka = `sdffsfds
// sfsfsfsdf
// sdfsfdsfd
// `
// console.log (stroka)
// let name = 'Saha'
// let stroka = `Вас зовут ${name}`
// console.log(stroka)

//Длина строки
// let stroka = 'Яблоко'
//console.log('длина строки:${stroka.length}')

//получение символов
//console.log(stroka[1])
//дублированние строки
//console.log(stroka.repeat(5))

//изменить регистр
//console.log(stroka.toUpperCase()) заглавные 
//console.log(stroka.toLowerCase()) строчные

//выполнить поиск подстроки
//console.log(stroka.indexOf('ок')) поиск первого индекса
//console.log(stroka.lastIndexOf('я')) последний индекс

//срез строки
// console.log(stroka.slice(1,3))
// console.log(stroka.slice(-3,))

//проверка наличие подстроки
//console.log(stroka.includes('око'))

//Строка -> масив
//console.log(stroka.split('о')) разбивает на массивы 

// const arr = stroka.split('о')
// arr.push('а')
// console.log(arr)
// console.log(arr.join('а')) собирает в одну строку

// замена строки
// stroka = stroka.replace('Яб','Мо')
// stroka = stroka.replaceAll('о','а')
// console.log(stroka)

//удалене пробелов
// console.log('    яблоко    '.trim())

//zadanie1
// let stroka = 'qq'
// console.log(stroka.repeat(10))
 // zadanie2
//  let stroka = 'qq'
//  console.log(stroka.toUpperCase())
//zadanie4
// let stroka ='яблоко'
// let ss = ''
// console.log(ss+'#'.repeat(stroka.length-4)+stroka.slice(-4))

//zadanie 5
//let dd = 'яблоко'
//console.log(dd.includes('да'))

//zadanie 6
// let dd='яблоко'
// console.log(dd.indexOf('о'))
// console.log(dd.lastIndexOf('о'))

//zadanie 9
// let ff ='abcd'
// console.log(ff.toUpperCase()[0]+'-'+ff.toUpperCase()[1]+ff.[1].repeat(1)+'-'+ff.toUpperCase()[2]+ff[2].repeat(2)+'-'+ff.toUpperCase()[3]+ff[3].reaper(3))


//ОБЬЕКТЫ js

// let gg = {
//     name:'Иван',
//     age:20,
    // car:['bmw','mersedes'],
    // home:{
    //     street:['rubensteyn'],
    //     house:50


//}
//     "имя":"ivan"
// }

// console.log(gg)

//обращение
//console.log(user.name)
//добавление
//user.school=44
//удаление
//delete user.age
//обход обьекта
// for(let key in gg){
//     console.log(key,gg[key])
// }

//  const arr = [1,2,3,4]
// for (let element of arr){
//     console.log(element)
// }
//zadanie 1

// let user ={
//     name:'Alex',
//     age:20,

// } 
// let ff =[]
// for(let key in user){
//     ll = [key,user[key]]
//     d=ff.push(ll)
//     console.log(ff)
// }

//zadanie 2

// let user ={
//     name:'alex',
//     age:20,
//     car:['bmw','mersedes'],
//     home:{
//         street:['rubensteyn'],
//         house:50,
       
// }
// // создание обьекта

// person1={...person}
// person1= Object.assign(person)
// person1.name='Александр'

// console.log(Object.keys(person))

//zadanie 3

// for(let key in gg){
//     if(gg[key]== null){
//         console.log(key,true)
//         break
//     }else if(gg[key]== NaN){
//         console.log(key,true)
//         break
//     }else if(gg[key]==''){
//         console.log(key,true)
//         break
//     }else{
//         console.log(key,false)
//     }

    

// }


//zadanie 4

// let gg1={
//     name:'Броуди',
//     age:20,

// }
// for(let key in gg,gg1){
//     if(gg[key]==gg1[key]){
//         console.log(key,true)
//     }else{
//         console.log(key,false)
//     }
// }

//zadanie 5

// let gg={
//     John:100,
//     Ann:160,
//     Pit:130,
// }
// let sum=0
// for(let key in gg){
//     sum = sum+gg[key]
// }
// console.log(sum)

//zadanie 6

// let gg={
//     John:100,
//     Ann:160,
//     Pit:130,
//     title:'gggg'
// }
// for(let key in gg){
//     if(gg[key]=== String(gg[key])){
//         console.log(key,false)
//     }
//     if(gg[key]===Number(gg[key])){
//         sum=gg[key]*2
//         console.log(key,sum)
    
//     }
// }

//zadanie 7
// let gg ={
//     a:100,
//     b:200,
// }
// let gg1={
//     c:300,
//     d:400,
// }
// gg2={
//     ...gg,
//     ...gg1
// }
// console.log(gg2)


// 11.11.22


