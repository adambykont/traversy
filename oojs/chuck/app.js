function loadJokes(event) {

    event.preventDefault();

    let numberOfJokes = document.getElementById('number').value;
    let jokesList = document.getElementById('jokes');

    let xhr = new XMLHttpRequest();
    xhr.open('get', `http://api.icndb.com/jokes/random/${numberOfJokes}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            let jokesObjectArray = JSON.parse(this.responseText).value;

            let jokesElements = ``;
            jokesObjectArray.forEach(jo => {
                jokesElements += `<li>${jo.joke}</li>`
            });
            jokesList.innerHTML = jokesElements;
        }
    };

    xhr.send();


}

document.getElementById('btn').addEventListener('click', loadJokes);