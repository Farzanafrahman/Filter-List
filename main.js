let filterInput = document.querySelector('#filterInput');

filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    let filterValue = document.querySelector('#filterInput').value.toUpperCase();

    let ul = document.querySelector('#names');

    let list = ul.querySelectorAll('collection-item');

    list.forEach((item) => {
        let a = item.querySelector('a');
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    })
}

//Event: Add Contacts

//TWO WAYS
//1.
// document.querySelector('#addButton').addEventListener('click', (e) => {

//     e.preventDefault();
//     let showInput = document.querySelector('#showInput');
//     if (showInput.classList.contains('show')) {
//         showInput.style.display = 'block';
//     }
// })

//2.
let button = document.querySelector('#addButton');

let showInput = document.querySelector('#showInput');
showInput.style.visibility = 'hidden';

button.addEventListener('click', showInputBox);

function showInputBox(e) {
    e.preventDefault();
    showInput.style.visibility = 'visible';
}

//Get values

button.addEventListener('click', addToList);

function addToList(e) {
    e.preventDefault();
    let contact = document.querySelector('#showInput').value;
    let item = document.querySelector('.collection');

    let row = document.createElement('li');

    row.classList.add('collection-item');

    row.innerHTML = `
        <a href="#">${contact}</a>
    `;

    item.appendChild(row);


}

