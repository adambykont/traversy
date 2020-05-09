function loadData(event) {

    let xhr = new XMLHttpRequest();

    console.log(xhr.readyState);

    xhr.open('get', 'data.txt', true);
    console.log(xhr.readyState);

    xhr.onreadystatechange = () => {
        console.log(xhr.readyState);
        if (xhr.status === 200 && xhr.readyState === 4) {
            document.getElementById('output').innerHTML = xhr.responseText;
        }
    }

    xhr.send();

    event.preventDefault();
}

document.getElementById("button").addEventListener('click', loadData);