// function getAnimals() {
//     // return new Promise((resolve, reject) => {
//     //     const xhr = new XMLHttpRequest();
//     //
//     //     xhr.open('get', 'pets.json', true);
//     //
//     //     xhr.onload = function () {
//     //
//     //         if (this.status === 200) {
//     //             const arr = JSON.parse(this.responseText);
//     //             resolve(arr);
//     //         } else {
//     //             reject(this.status);
//     //         }
//     //     }
//     //
//     //     xhr.send();
//     // });
//
//     return new Promise((resolve, reject) => {
//         fetch('pets.json')
//             .then(response => response.json())
//             .then(data => resolve(data))
//             .catch(err => reject(err));
//     });
//
// }

async function getAnimals() {
    const response = await fetch('pets.json')

    return await response.json();
}

getAnimals()
    .then(array => array.forEach(a => console.log("Meowy " + a.name)));