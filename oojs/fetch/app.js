function getText() {
    fetch('text.txt')
        .then(response => response.text())
        .then(data => document.getElementById('output').innerHTML = data)
        .catch(err => document.getElementById('output').innerHTML = err);
}

document.getElementById('button1').addEventListener('click', getText);

function getJSON() {
    fetch('posts.json')
        .then(res => res.json())
        .then(function (array) {
            let response = `<ul>`
            array.forEach(p => response += `<li>${p.title} : ${p.body}</li>`)
            response += `</ul>`
            document.getElementById('output').innerHTML = response;
        })
}

document.getElementById('button2').addEventListener('click', getJSON);

function getFromApi() {

    fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(json => {
            let response = `<ul>`;
            json.forEach(j => response += `<li>${j.login}</li>`);
            response += `</ul>`;
            document.getElementById('output').innerHTML = response;
        })


}

document.getElementById('button3').addEventListener('click', getFromApi);