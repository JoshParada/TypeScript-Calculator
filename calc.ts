let output = document.querySelector('.output') as HTMLInputElement;
/*declare the following variables and types
  num1 as number
  num2 as number
  operand as string
  
  Figure out how to set the values of num1 and num2 as the buttons are clicked
  */
let num1: number;
let num2: number;
let operand: string;

document.querySelector('.calc').addEventListener('click', (evt) => {
    let button = evt.target as HTMLButtonElement;

    if (button.className.indexOf('num') !== -1) {
        console.log(button.innerHTML);
        output.value += button.innerHTML;
    }
    if (button.className.indexOf('operator') !== -1) {
        console.log(button.innerHTML);
        output.value += button.innerHTML;

        num1 = parseInt(output.value);
        console.log(num1)
        operand = button.innerHTML;
        console.log(operand);

        output.value = '';
    }
    if (button.className.indexOf('equal') !== -1) {
        console.log(button.innerHTML);

        num2 = parseInt(output.value);
        console.log(num2)

        let calculation = calculate(num1, num2);
        output.value = calculation.toString();
    }
    if (button.className.indexOf('reset') !== -1) {
        console.log(button.innerHTML);
        output.value = '';
    }
    /* create another condition to clear the value of the input when C is pressed*/
});

//create a function that takes in 2 numbers and a string (operand)
function calculate(num1, num2) {
    /* based on the operand, find the correct value of the 2 numbers.  i.e., 4+5=9, 4*5=20, etc
    return that value
    */

    switch (operand) {

        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            if(num2===0){
                output.value = 'CANNOT DIVIDE BY 0'
            }else{
                return num1 / num2;
            break;
            }
            
    }

}