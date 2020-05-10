const posts = [
    {title: 'Post one', pbody: 'This is pod one'},
    {title: 'Post two', body: 'This is pod two'}
];

function createPosts(post, callback) {

    setTimeout(function () {
        posts.push(post);
        callback();
    }, 2000);


}

function getPosts() {
    setTimeout(function () {
        posts.forEach(p => console.log(p.title));
    }, 1000)
}

let post3 = {title: 'Post three', body: 'This is pod three'};
createPosts(post3, getPosts);
