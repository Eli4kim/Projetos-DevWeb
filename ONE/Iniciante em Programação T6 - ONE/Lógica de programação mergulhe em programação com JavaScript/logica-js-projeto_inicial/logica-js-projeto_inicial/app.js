// Gera um número aleatório entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Pede ao usuário para adivinhar o número secreto
let tentativas = 0;
let palpite = 0;

while (palpite !== numeroSecreto) {
  palpite = parseInt(prompt("Adivinhe o número secreto (entre 1 e 100):"));
  tentativas++;
// if = se Então se palpite for igual a numero secreto, mostrar resultado.
  if (palpite < numeroSecreto) {
    alert("Seu palpite é muito baixo. Tente novamente.");
  } else if (palpite > numeroSecreto) {
    alert("Seu palpite é muito alto. Tente novamente.");
  }
}

// Parabeniza o usuário pela adivinhação correta
alert(`Parabéns! Você adivinhou o número secreto em ${tentativas} tentativas.`);
