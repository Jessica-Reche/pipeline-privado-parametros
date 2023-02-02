const persona_a_saludar = process.argv[2];
if (!persona_a_saludar) {
  console.error('Falta el nombre de la persona a saludar');
  process.exit(1);
}
console.log(`Hola amig@ ${persona_a_saludar}`);
