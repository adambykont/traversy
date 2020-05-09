function loadData(event) {


    let xhr = new XMLHttpRequest();


    xhr.open('get', 'data.txt', true);

    xhr.onload = function () {
        console.log(this);
        if (this.status === 200 && this.readyState === 4) {
            document.getElementById('output').innerHTML = this.responseText;
        }
    };

    xhr.send();
    // console.log(xhr);

    event.preventDefault();
}

document.getElementById("button").addEventListener('click', loadData);