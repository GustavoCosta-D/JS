function ePaisagem(a, l) {
  const resultado = a > l ? 'Está em retrato.' : 'Está em paisagem.';
  return resultado;
}

console.log(ePaisagem(100, 200));