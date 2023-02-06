const script1 = process.env.SCRIPT1_RESULT;
const script2 = process.env.SCRIPT2_RESULT;

if (script1 === '0' && script2 === '0') {
  console.log('El proyecto va viento en popa!!!');
} else if (script1 !== '0' || script2 !== '0') {
  console.log('Alguna de las dos stages ha fallado');
} else {
  console.log('Esto pinta muy mal');
}

