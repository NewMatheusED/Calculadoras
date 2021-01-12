var num1 = parseInt(prompt("Escolha um número:"))
var num2 = parseInt(prompt("Outro número:"));

var sinal = prompt("Agora um sinal entre +, -, *, /:")

switch(sinal) {
    case "+": 
        alert("O resultado da soma é " + (num1 + num2) + " (" + num1 + " + " + num2 + ")");
        break;
    case "-":
        alert("O resultado da subtração é " + (num1 - num2) + " (" + num1 + " - " + num2 + ")");
        break;
    case "*":
        alert("O resultado da multiplicação é " + (num1 * num2) + " (" + num1 + " * " + num2 + ")" );
        break;
    case "/":
        alert("O resultado da divisão é " + (num1 / num2) + " (" + num1 + " / " + num2 + ")" );
}