const posts = [
    {title: 'Post one', pbody: 'This is pod one'},
    {title: 'Post two', body: 'This is pod two'}
];


let post3 = {title: 'Post three', body: 'This is pod three'};

function createPost(post, callback) {
    setTimeout(function () {
        posts.push(post);
        callback();
    }, 2000);
}

function getPosts(msg) {
    console.log(msg);
    setTimeout(function () {
        posts.forEach(p => console.log(p.title));
    }, 1000);
}

createPost(post3, ()=>getPosts("All posts"));
