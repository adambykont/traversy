function clicked(event) {
    event.preventDefault();

    if (event.target.classList.contains('item')) {
        document.getElementById('headline').innerHTML = event.target.innerHTML;
    }
}

document.getElementById('list').addEventListener('click', clicked);

function acivateItem(event) {
    event.preventDefault();

    if (event.target.classList.contains('item')) {
        let element = document.getElementById('list').firstElementChild;
        while (element) {
            element.classList.remove('activated');
            element = element.nextElementSibling;
        }
        event.target.classList.add('activated');
    }

}

document.getElementById('list').addEventListener('click', acivateItem);

let counter = 0;

function addItem(event) {
    event.preventDefault();


    let element = document.createElement('li');
    element.className = 'item';
    element.appendChild(document.createTextNode('new content ' + (++counter)));

    document.getElementById('list').appendChild(element);

}

document.getElementById('btn').addEventListener('click', addItem);