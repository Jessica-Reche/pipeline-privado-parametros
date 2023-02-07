//Cojo las variables de los dos scripts anterior para comprobar si son correctas o no
var script1 = process.args[2];
var script2 = process.args[3];


switch (script1) {
  case 'correcto':
    switch (script2) {
      case 'correcto':
        console.log('El proyecto va viento en popa!!!');
        process.exit(0);
        break;
      default:
        console.error('Algún script ha fallado');
        process.exit(1);
    }
    break;
  case 'incorrecto':
    switch (script2) {
      case 'incorrecto':
        console.error('esto pinta muy mal...');
        process.exit(1);
        break;
      default:
        console.error('Algún script ha fallado');
        process.exit(1);
    }
    break;
  default:
    console.error('Algún script ha fallado');
    process.exit(1);
}
