let parent = document.getElementById('parent');
let child = document.getElementById('child');
let grandchild = document.getElementById('grandchild');

function parentClicked(e) {
    console.log('Parent clicked');
}

parent.addEventListener('click', parentClicked);

function childClicked(e) {
    console.log('Child clicked');
}

child.addEventListener('click', childClicked);

function grandchildclicked(e) {
    console.log('Grandchild clicked');
}

grandchild.addEventListener('click', grandchildclicked);