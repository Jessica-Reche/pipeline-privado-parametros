if (process.argv.length < 4) {
  console.error('Error: se esperaban dos argumentos');

}
var script1 = process.argv[2];
var script2 = process.argv[3];


switch (script1) {
  case 'correcto':
    switch (script2) {
      case 'correcto':
        console.log('El proyecto va viento en popa!!!');

        break;
      default:
        console.error('Algún script ha fallado');

    }
    break;
  case 'incorrecto':
    switch (script2) {
      case 'incorrecto':
        console.error('esto pinta muy mal...');

        break;
      default:
        console.error('Algún script ha fallado');
 
    }
    break;
  default:
    console.error('Algún script ha fallado');
   
}
