//асинхронные операции и получение данных 

// синхронные операции
// console.log('привет');
// const div = document.querySelector('#post')
// div.innerHTML = 'Посты'

//Асинхронные операции
async function getPosts(){
    const url = 'https://kinopoiskapiunofficial.tech/api/v2.2/films';
    const response = await fetch(url, {
        headers:{
            'Content-Type': 'aplication/json',
            'X-API-KEY': 'bae6aacc-56f7-4322-9f18-db29d2dd8d32'
        },
    });
    const posts = await response.json();
    console.log(posts);
    showPosts(posts)
}
function showPosts(posts) {
    const postsDiv = document.getElementById('posts');
    for (const post of posts.items){
        postsDiv.innerHTML += `
        <style>
        .foto{
            width: 300px;
        }
        .border{
            border: 1px solid orange;
            margin-bottom: 2px;
            width: 300px;
            height: 520px;
            margin: 50px;
        }
        .name{
            font-size: 20px;
            font-family: Arial, Helvetica, sans-serif;
        }
        .body{
            display: flex;
            flex-wrap: wrap;
        }
        </style>
        <div class="border">
        <div>
            <img class="foto" src="${post.posterUrl}"/>
        </div>
        <div class="name" >Название поста: ${post.nameRu}</div>
        <div>
        ${post.body}
        </div>
        `
    }
}

getPosts();

//Виды запросов; GET-ПОЛУЧЕНИЕ, POST- ЗАПРОС, DELETE, PUT

//статус код запроса:
// 200 -  успешно
// 400 - ошибка


// параметры 
//PATH - параметр (параметр пути) 'https://jsonplaceholder.typicode.com/posts'
// QUERY - прараметр: 'https://jsonplaceholder.typicode.com/comments?postId=1'