// function Data() {
//   const texto = document.querySelector(".container h1");
//   const data = new Date();

//   const dia = data.getDay(); // pega dia por index, não formatado
//   const mes = data.getMonth();
//   const ano = data.getFullYear();
//   const hora = zeroAEsquerda(data.getHours());
//   const min = zeroAEsquerda(data.getMinutes());
//   let diatexto;
//   let mestexto;

//   switch (dia) {
//     case 0:
//       diatexto = "Domingo";
//       break;
//     case 1:
//       diatexto = "segunda-feira";
//       break;
//     case 2:
//       diatexto = "terça-feira";
//       break;
//     case 3:
//       diatexto = "quarta-feira";
//       break;
//     case 4:
//       diatexto = "quinta-feira";
//       break;
//     case 5:
//       diatexto = "sexta-feira";
//       break;
//     case 6:
//       diatexto = "sábado";
//       break;
//     default:
//       diatexto = " ";
//   }

//   switch (mes) {
//     case 0:
//       mestexto = "Janeiro";
//       break;
//     case 1:
//       mestexto = "Fevereiro";
//       break;
//     case 2:
//       mestexto = "Março";
//       break;
//     case 3:
//       mestexto = "Abril";
//       break;
//     case 4:
//       mestexto = "Maio";
//       break;
//     case 5:
//       mestexto = "Junho";
//       break;
//     case 6:
//       mestexto = "Julho";
//       break;
//     case 7:
//       mestexto = "Agosto";
//       break;
//     case 8:
//       mestexto = "Setembro";
//       break;
//     case 9:
//       mestexto = "Outubro";
//       break;
//     case 10:
//       mestexto = "Novembro";
//       break;
//     case 11:
//       mestexto = "Dezembro";
//       break;
//     default:
//       mestexto = "";
//   }

//   function zeroAEsquerda(num) {
//     return num >= 10 ? num : `0${num}`;
//   }

//   texto.innerHTML = `${diatexto}, ${dia + 1} de ${mestexto} de ${ano} ${hora}:${min}`;
//   console.log(data.toString());
//   console.log(dia, mes);
//   console.log(diatexto, mestexto);
// }

// Data();

const h1 = document.querySelector(".container h1");
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });