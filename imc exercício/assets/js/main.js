function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const peso = Number(form.querySelector(".peso").value);
    const altura = Number(form.querySelector(".altura").value);

    if (isNaN(altura) || altura <= 0) {
      resultado.innerHTML = `<p class="invalido">Altura Inválida.</p>`;
      return;
    } else if (isNaN(peso) || peso <= 0) {
      resultado.innerHTML = `<p class="invalido">Peso Inválido.</p>`;
      return;
    }

    const soma = peso / (altura ** 2);
    let imc = "";

    if (soma <= 18.5) {
      imc = "Abaixo do peso";
    } else if (soma > 18.5 && soma <= 24.9) {
      imc = "Peso normal";
    } else if (soma >= 25 && soma <= 29.9) {
      imc = "Acima do Peso";
    } else if (soma >= 30 && soma <= 34.9) {
      imc = "Obesidade Grau 1";
    } else if (soma >= 35 && soma <= 39.9) {
      imc = "Obesidade Grau 2";
    } else if (soma >= 40 && soma <= 60) {
      imc = "Obesidade Grau 3";
    }

    resultado.innerHTML = `<p class="valido">Seu IMC é ${soma.toFixed(2)} - ${imc}</p>`;
  }
  form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();