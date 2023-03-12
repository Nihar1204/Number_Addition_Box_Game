const cells = document.querySelectorAll('td');

const resetButton = document.getElementById('reset-button');


cells.forEach(cell => {
  cell.addEventListener('click', () => {
    cell.classList.add('red');
  });
});

let firstNumber = null;
let secondNumber = null;

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (firstNumber === null) {
      firstNumber = parseInt(cell.textContent);
    } else if (secondNumber === null) {
      secondNumber = parseInt(cell.textContent);
      const sum = firstNumber + secondNumber;
      const resultCell = document.getElementById(sum.toString());
      if (resultCell) {
        resultCell.classList.add('green');
      }
      firstNumber = null;
      secondNumber = null;

    }
  });
});
//  const reset1 = document.getElementByClassName('reset');
//  const resetButton1=reset1.getElementByTagName('button');
//  const resetButton=resetButton1[0];

resetButton.addEventListener('click', () => {
  cells.forEach(cell => {
    cell.classList.remove('red', 'green');
  });
  firstNumber = null;
  secondNumber = null;
});