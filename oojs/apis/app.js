let http = new EasyHTTP();

// http.get('http://jsonplaceholder.typicode.com/posts/3', function (err, response) {
//
//     console.log(err === null ? response : err);
// });

// http.get('http://jsonplaceholder.typicode.com/posts', function (err, response) {
//
//     console.log(err === null ? response : err);
// });


const data = {
    "userId": 13,
    "id": 101,
    "title": "Cats rulez",
    "body": "Cats are nice."
}

// http.post("https://jsonplaceholder.typicode.com/posts", data, function (err, post) {
//     console.log(err !== null ? err : post);
// });


// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (err, post) {
//     console.log(err === null ? post : err);
// })

http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, post) {
    console.log(err === null ? post : err);
})
