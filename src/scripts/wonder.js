// The learning objective of this exercise is writing event listeners to handle button clicks, and modifying the classList of DOM elements when those events are broadcast by the browser.

const flightHandler = (event) => {
    const flightPower = document.querySelector('#flight');
    flightPower.classList.remove('disabled');
    flightPower.classList.add('enabled');
};


const flightButton = document.querySelector('#activate-flight');

flightButton.addEventListener('click', flightHandler);

// Add event listener that removes the disabled class for #mindreading and adds the enabled class

const mindReadingHandler = (event) => {
    const mindReadingPower = document.querySelector('#mindreading');
    mindReadingPower.classList.remove('disabled');
    mindReadingPower.classList.remove('enabled');
};

const mindReadingButton = document.querySelector('#activate-mindreading');

mindReadingButton.addEventListener('click', mindReadingHandler);

// Add event listener that removes the disabled class for #xray and adds the enabled class

const xrayHandler = (event) => {
    const xrayPower = document.querySelector('#xray');
    xrayPower.classList.remove('disabled');
    xrayPower.classList.add('enabled');
};

const xrayButton = document.querySelector('#activate-xray');

xrayButton.addEventListener('click', xrayHandler);






