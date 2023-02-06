//varibles de entorno de Jenkins para el script
const script1 = process.env.SCRIPT1_RESULT;
const script2 = process.env.SCRIPT2_RESULT;


if (script1 === 'correcto' && script2 === 'correcto') {
  console.log('El proyecto va viento en popa!!!');
  process.exit(0);
} else if (script1 === 'incorrecto' && script2 === 'incorrecto') {
  console.error('esto pinta muy mal...');
  console.error(script1, script2);
  process.exit(1);
} else {
  console.log('Algún script ha fallado');
  console.log(script1, script2);
  process.exit(1);
}
