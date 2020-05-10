document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomer() {
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'customer.json', true);
    xhr.onload = function () {
        if (this.status === 200) {
            let customerObj = JSON.parse(this.responseText);
            const output = `
<ul>
    <li>ID : ${customerObj.id}</li>
    <li>Name : ${customerObj.name}</li>
    <li>Company : ${customerObj.company}</li>
    <li>Phone : ${customerObj.phone}</li>
</ul>
            `;

            document.getElementById('customerObj').innerHTML = output;
        }
    }
    xhr.send();
}

function loadCustomers() {
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'customers.json', true);
    xhr.onload = function () {
        if (this.status === 200) {
            let customersArray = JSON.parse(this.responseText);
            let output = '';
            customersArray.forEach(customer => {
                output +=
                    `<ul>
    <li>ID : ${customer.id}</li>
    <li>Name : ${customer.name}</li>
    <li>Company : ${customer.company}</li>
    <li>Phone : ${customer.phone}</li>
</ul>`
            });


            document.getElementById('customers').innerHTML = output;
        }
    }
    xhr.send();
}