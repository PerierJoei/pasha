async function getFilms() {
    try{
    const url = " https...."
    const response = await fetch(url,{
        headers:{

        }
    })
    const film = await response.json();
} 
catch(error){
    console.error(error)
    alert('возникла ошибка')
}
finally {
    console.log('выполняется всегда')

}
}