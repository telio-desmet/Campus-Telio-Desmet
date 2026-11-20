 import slugify from 'slugify'

const name = process.argv[2] ?? 'inconnu'
console.log(`Bienvenue sur Campus, ${name} ! `)
console.log('Nom slugifié :', slugify(name, { lower: true, strict: true, locale: 'fr' }))
const date = new Date();
console.log("Date du jour :", date.toLocaleDateString("fr-FR"));
