// The learning objective of this challenge to write a function handler to be used for multiple events, and uses information in the event argument to perform common logic.

// You may notice that your code to enable individual powers(not all at once) is very similar.To keep your code DRY, make one function that will handle activating a power depending on which button is clicked. (Hint: one way to get started is to use event.target.id.split("-") in your function)

const activatePower = (event) => {
    console.log(event.target.id);
    const powerId = event.target.id;
    const power = powerId.split('-')[1];
    const powerElement = document.querySelector(`#${power}`);
    powerElement.classList.remove('disabled');
    powerElement.classList.add('enabled');
};

const flightButton = document.querySelector('#activate-flight');
flightButton.addEventListener('click', activatePower);

const mindReadingButton = document.querySelector('#activate-mindreading');
mindReadingButton.addEventListener('click', activatePower);

const xrayButton = document.querySelector('#activate-xray');
xrayButton.addEventListener('click', activatePower);


