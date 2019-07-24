// The learning objective for this challenge is to practice event listeners for click events.You will also practice adding elements to the DOM, and removing elements from the DOM with the removeChild() method.You will even need to use the split() method on a string.

// Requirements

// 1. Create an HTML page that contains a text area and a button labeled Create.
// 2. When the user enters in text into the text area and then clicks the create button, use a factory function that creates a new DOM component that has a border, and includes it's own delete button.
// 3. Insert that new component into the DOM.
// 4. When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM.Not just made invisible, actually removed from the DOM.

// Pro tip: The card's id attribute, and the button's id attribute should share some common value.Then, when the button is clicked, find the corresponding parent DOM component.Remember the split() method on a string ? That will be helpful.

const createButton = document.querySelector('#submit-button');

// Grab current value of the text input area and pass into a function to create a new card
const createCard = (event) => {
    const textArea = document.querySelector('#text-area');
    createHTML(textArea.value);
    setupDelete();
};

// 
const setupDelete = () => {
    const lastIndex = document.querySelectorAll('.delete__button').length - 1;
    console.log(lastIndex);
    const lastButton = document.querySelectorAll('.delete__button')[lastIndex];
    lastButton.addEventListener('click', deleteItem);
};

const deleteItem = (event) => {
    console.log('You clicked the last button');
    const lastIndex = document.querySelectorAll('.delete__button').length - 1;
    const deleteButton = document.querySelectorAll('.delete__button')[lastIndex];
    const cardItem = deleteButton.parentElement;
    console.log(cardItem);
    const cardContainer = document.querySelector('.card__list');
    cardContainer.removeChild(cardItem);
}

// Creates new HTML element with the text that is passed in as an argument and adds it to the page
const createHTML = (text) => {
    const cardContainer = document.querySelector('.card__list');
    const newHTML = `<section class="card__item">
                        <p class="card__item">${text}</p>
                        <button type="submit" id="delete-button" class="delete__button">Delete</button>
                    </section>`;
    cardContainer.innerHTML += newHTML;
};


createButton.addEventListener('click', createCard);

