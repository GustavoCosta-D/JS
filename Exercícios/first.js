// Usando random para pegar os números

// function numeros(min, max) {

//   const num1 = Math.random(min, max) * (max - min) + min;
//   const num2 = Math.random(min, max) * (max - min) + min;
//   const rand1 = Math.floor(num1);
//   const rand2 = Math.floor(num2);

//   if (num1 > num2) {
//     console.log(`O primeiro é maior: ${rand1}`);
//   } else if (num2 > num1) {
//     console.log(`O segundo é maior: ${rand2}`);
//   } else {
//     console.log("Os números são iguais!");
//   }

// };

// numeros(0, 100);

// Simplificada

const max2 = (x, y) => x > y ? x : y;
console.log(max2(10, 20));