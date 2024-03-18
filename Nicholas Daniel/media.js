let n1 = parseInt(document.getElementById('nota_1').value);
let n2 = parseInt(document.getElementById('nota_2').value);

function soma(n1, n2) {
    sum = n1 + n2
    alert(sum)
    
if (sum < 60) {
    prompt('Você está aprovado.')
}

if ((sum == 50) && (sum <= 59)) {
    prompt('Você está em recuperação.')
}

if (sum < 50) {
    prompt('Você está reprovado.')
}
}