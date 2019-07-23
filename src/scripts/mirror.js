
// Get reference to desired HTML elements
const inputBox = document.querySelector('#message');
const item1 = document.querySelector('#item1');
const item2 = document.querySelector('#item2');

inputBox.addEventListener('keyup', (event) => {
    console.log(event);
    item1.textContent = event.target.value;
    item2.textContent = event.target.value;
});