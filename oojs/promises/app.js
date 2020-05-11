const posts = [
    {title: 'Post one', pbody: 'This is pod one'},
    {title: 'Post two', body: 'This is pod two'}
];


let post3 = {title: 'Post three', body: 'This is pod three'};

function createPost(post) {

    return new Promise((resolve, reject) => {
        setTimeout(function () {
            posts.push(post);
            resolve();
        }, 2000);
    });
}

function getPosts() {
    setTimeout(function () {
        posts.forEach(p => console.log(p.title));
    }, 1000);
}

createPost(post3)
    .then(() => getPosts());

