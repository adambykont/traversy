// https://learnwebcode.github.io/json-example/animals-1.json

let animals = document.getElementById('animal-info');
let counter = 0;

function renderHTML(array) {
    if (counter === 3) {
        document.getElementById('btn').style.display = 'none';
    }
    let htmlToInsert = ``;
    array.forEach(a => {
        htmlToInsert += `<p>`;
        htmlToInsert += `${a.name} is a ${a.species} that likes ${a.foods.likes.join(", ")} and dislikes ${a.foods.dislikes.join(", ")}.`
        htmlToInsert += `</p>`;
    });
    animals.innerHTML = animals.innerHTML + htmlToInsert;
}

function addAnimals(event) {
    event.preventDefault();

    let xhr = new XMLHttpRequest();
    xhr.open('get', `https://learnwebcode.github.io/json-example/animals-${(++counter)}.json`, true);
    xhr.onload = function () {
        renderHTML(JSON.parse(this.responseText));
    }
    xhr.send();
}

document.getElementById('btn').addEventListener('click', addAnimals);