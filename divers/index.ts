interface Product {
  id: number
  name: string
  price: number
  description?: string
}

const products: Product[] = [
  { id: 1, name: 'Clavier mécanique', price: 89, description: 'Touches rouges, rétroéclairage RGB' },
  { id: 2, name: 'Souris sans fil', price: 35, description: 'Capteur optique, 6 boutons' },
  { id: 3, name: 'Écran 27 pouces', price: 249, description: 'Dalle IPS, 144 Hz' },
  { id: 4, name: 'Casque audio', price: 75, description: 'Réduction de bruit active' },
  { id: 5, name: 'Câble USB-C', price: 12 },
]

function findById(products: Product[], id: number): Product | undefined {
  return products.find((product: Product) => product.id === id)
}



function cheaperThan(products: Product[], max: number): Product[] {
  return products.filter((product: Product) => product.price < max)
}


const cheaperThanArrow = (products: Product[], max: number): Product[] => products.filter((product: Product) => product.price < max)



const id = Number(process.argv[2])
const product = findById(products, id)

if (product === undefined) {
  console.log(`Produit ${id} introuvable`)
} else {
  console.log(`Nom : ${product.name}`)
  console.log(`Prix : ${product.price} €`)
  console.log(`Description : ${product.description ?? 'Pas de description'}`)
}

console.log('Produits à moins de 50 € :')
for (const cheap of cheaperThan(products, 50)) {
  console.log(`- ${cheap.name}`)
}

console.log('Produits à moins de 50 € :')
for (const cheap of cheaperThanArrow (products, 50)) {
  console.log(`- ${cheap.name}`)
}
