const script1 = process.env.SCRIPT1_RESULT;
const script2 = process.env.SCRIPT2_RESULT;

if (script1 === 'correcto' && script2 === 'correcto') {
  console.log('El proyecto va viento en popa!!!');
  process.exit(0);
} else if ((script1 !== 'correcto' || script2 !== 'correcto')&& (script1 === 'correcto' || script2 === 'correcto')) {
  console.log('Alguna de las dos stages ha fallado');
  process.exit(1);
} else if(script1 !== 'correcto' && script2 !== 'correcto'){
  console.log('Esto pinta muy mal');
  process.exit(1);
}
