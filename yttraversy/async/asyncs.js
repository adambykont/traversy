const posts = [
    {title: 'post 1', body: 'this is post one'},
    {title: 'post 2', body: 'this is post two'},
];

const post3 = {title: 'post 3', body: 'this is post three'};

const pel = document.getElementById('posts');

function getPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let html = ``;
            posts.forEach(post => html += `<p>${post.body}</p>`);
            pel.innerHTML = html;
            resolve();
        }, 1000);
    })
}

function addPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            console.log('added: ' + posts[2].title);
            resolve();
        }, 2000);
    })
}

async function asyncAdd(post) {
    await addPost(post);
    await getPosts();
}

asyncAdd(post3);

console.log("The end")