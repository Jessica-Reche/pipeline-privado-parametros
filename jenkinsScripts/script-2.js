const script2Result = process.env.SCRIPT2_RESULT;

if (script2Result === 'correcto') {
  console.log('El script 2 ha sido ejecutado correctamente');
  process.exit(0);
} else {
  console.error('El script 2 ha fallado');
  process.exit(1);
}
