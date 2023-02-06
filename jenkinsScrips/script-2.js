const SCRIPT2_RESULT = process.argv[2];

if (SCRIPT2_RESULT === 'correcto') {
  console.log('Script 2 ha funcionado correctamente');
  process.exit(0);
} else {
  console.error('Script 2 ha fallado');
  process.exit(1);
}
