let items = document.querySelector('.collection');

function deleteItem(e) {
    if (e.target.classList.contains('fa-remove')) {
        let liEl = e.target.parentElement.parentElement;
        console.log(liEl);
        liEl.parentElement.removeChild(liEl);
    }
}

items.addEventListener('click', deleteItem);