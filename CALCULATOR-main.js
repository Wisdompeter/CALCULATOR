let inputField = document.querySelector('.talk');
let calculation = '';

function press(num) {
 calculation += num;
 inputField.value = calculation;
}

