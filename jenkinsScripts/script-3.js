//Cojo las variables de los dos scripts anterior para comprobar si son correctas o no
var script1 = process.env.SCRIPT1_RESULT;
var script2 = process.env.SCRIPT1_RESULT;


if (script1 === 'correcto' && script2 === 'correcto') {
  console.log('El proyecto va viento en popa!!!');
  process.exit(0);
} else if (script1 === 'incorrecto' && script2 === 'incorrecto') {
  console.error('esto pinta muy mal...');
  console.error(script1, script2);
  process.exit(0);
} else {

  console.log('Algún script ha fallado');
  
  process.exit(0);
}
