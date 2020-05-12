let http = new EasyHTTP();

// http.get('http://jsonplaceholder.typicode.com/posts')
//     .then(d => console.log(d[0].title))
//     .catch(e => console.log(e));

const data = {
    "userId": 13,
    "id": 101,
    "title": "Cats rulez",
    "body": "Cats are nice."
}

http.post("http://jsonplaceholder.typicode.com/posts/101")
    .then(d => console.log(d))
    .catch(e => console.log(e));
