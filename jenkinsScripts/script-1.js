const SCRIPT1_RESULT = process.argv[2];

if (SCRIPT1_RESULT === 'correcto') {
  console.log('Script 1 ha funcionado correctamente');
  process.exit(0);
 
} else {
  console.error('Script 1 ha fallado');
  process.exit(1);
  
}
