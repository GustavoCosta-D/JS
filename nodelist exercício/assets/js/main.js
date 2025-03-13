const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const BackgroundColorBody = estiloBody.backgroundColor;

for (let p of ps) {
  p.style.backgroundColor = BackgroundColorBody
  p.style.color = 'white';
}