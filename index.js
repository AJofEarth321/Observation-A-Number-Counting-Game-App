/**Adds event listeners for start and number button clicks:*/
 const addListeners = () => { 
    const startButton = document.querySelector('.start-button'); 
    startButton.addEventListener('click', randomizeButtons);
    const numberButtons = document.querySelectorAll('.tile');
    for (const numberButton of numberButtons) {
    numberButton.addEventListener('click', changeBackgroundColor)
    };
};

/**Function to randomize number buttons and remove yellow background color from any buttons that are not blue
 * 
 * @param {*} event triggered by clicking the Start! button
 */
const randomizeButtons = (event) => {
    //locate buttons to rearrange and also remove all yellow buttons
    const grid = document.querySelector('.grid-container');
    const buttons = document.querySelectorAll('.tile');
    //rearrange buttons
    for (let l = grid.children.length; l>=0; l--) {
    grid.appendChild(grid.children[Math.random() * l | 0]);
    //if buttons are yellow, make them blue
    for (let button of buttons) {
    button.classList.remove('colorOfSuccess'); 
    //clear 'You Win!' from .you-win
    document.querySelector('.you-win').innerHTML = '';
    }
}
};

/**
 * Function to change sequentially clicked number button's background colors to yellow; when all buttons are clicked, display "You Win!"
 * @param {*} event triggered by clicking any number button
 */
const changeBackgroundColor = (event) => {
    //Set 'comparison value' to the number of buttons that are yellow(number of elements with .colorOfSuccess)
    let yellowButtons = document.querySelectorAll('.colorOfSuccess').length;
    //Set clickedButton to the button that was clicked
    let clickedButton = event.target;
    //If the number of that button - 1 === 'comparison value' (yellowButtons), 
    if (Number(clickedButton.innerHTML)-1===yellowButtons){
        //change color of clicked button
        clickedButton.classList.add('colorOfSuccess');
        //if wrong button is clicked, nothing happens
        //If all background colors are yellow, return "You Win!"
        if (yellowButtons === 24) {
            document.querySelector('.you-win').innerHTML = 'You Win!';
        }
    }
};

addListeners();
