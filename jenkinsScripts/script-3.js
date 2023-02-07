//Cojo las variables de los dos scripts anterior para comprobar si son correctas o no
var script1 = process.args[2];
var script2 = process.args[3];


if (script1 === 'correcto' && script2 === 'correcto') {
  console.log('El proyecto va viento en popa!!!');
  process.exit(0);
} else if (script1 === 'incorrecto' && script2 === 'incorrecto') {
  console.error('esto pinta muy mal...');
  process.exit(0);
} else {
  console.error('Algún script ha fallado');
  process.exit(0);
}
