const script1Result = process.env.SCRIPT1_RESULT;

if (script1Result === 'correcto') {
  console.log('El script 1 ha sido ejecutado correctamente');
  process.exit(0);
} else {
  console.error('El script 1 ha fallado');
  process.exit(1);
}
