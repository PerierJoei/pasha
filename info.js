async function createUser(){
    try{
        console.log('dfdf')
        const url = 'http://192.168.1.118:5000';
        const response = await axios.post(`${url}/user/add`, {
            fio:'Павлик 228',
            tableId: 1,
        });
        console.log(response);
    }
    catch(error){
        console.error('Произошла ошибка',error);
    }
}
async function createComment(){
    try{
        const response = await axios.post(`${url}/comments/add`,{
            filmId: 1,
            commentText: "круто классно...",
            filmRating: 228,
            userId: 83,
        })
        console.log(response);
    }
    catch(error){
        console.error('Произошла ошибка',error);
    }
    
}

createComment();
