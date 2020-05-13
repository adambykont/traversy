const posts = [
    {title: 'post 1', body: 'this is post one'},
    {title: 'post 2', body: 'this is post two'},
];

const post3 = {title: 'post 3', body: 'this is post three'};

const pel = document.getElementById('posts');

function getPosts() {
    setTimeout(() => {
        let html = ``;
        posts.forEach(post => html += `<p>${post.body}</p>`);
        pel.innerHTML = html;
    }, 1000);
}

function addPost(post) {
    setTimeout(() => {
        posts.push(post);
        console.log('added')
    }, 2000);
}

addPost(post3);
getPosts();


console.log("The end")