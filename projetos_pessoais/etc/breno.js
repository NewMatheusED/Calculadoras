var altura = document.getElementById("altura").value;
var peso = document.getElementById("peso").value;
var imc1 = peso * altura;
var imc2 = imc1 / peso;

function local() {
    var final = document.getElementById("final2");
    
    if (imc2 <= 20) {
    final.innerHTML = "abaixo do peso";
} else if (imc2 > 20 && imc2 <= 25) {
    final.innerHTML = "peso ideal";
} else if (imc2 > 25 && imc2 <= 30) {
    final.innerHTML = "sobrepeso";
} else if (imc2 > 30 && imc2 <= 35) {
    final.innerHTML = "Obesidade moderada";
} else if (imc2 > 35 && imc2 <= 40) { 
    final.innerHTML = "Obesidade severa";
} else if (imc2 > 40 && imc2 <= 50) {
    final.innerHTML = "Obesidade Mórbita";
}else{
    final.innerHTML = "Super Obesidade"
}
}
