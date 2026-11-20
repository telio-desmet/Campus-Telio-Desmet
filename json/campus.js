const name = process.argv[2]
console.log(`Bienvenue sur Campus, ${name} ! `)
const date = new Date();
console.log("Date du jour :", date.toLocaleDateString("fr-FR"));