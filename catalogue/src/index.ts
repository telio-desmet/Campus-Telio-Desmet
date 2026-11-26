import { ConsoleLogger, SilentLogger } from './logger.js'
import { Product, ProductNotFoundError } from './product.js'
import { ProductsService } from './products.service.js'

// Ligne à changer : remplacer ConsoleLogger par SilentLogger.
const service = new ProductsService(new ConsoleLogger())

const product1: Product = {
  id: 1,
  name: 'Clavier mécanique',
  price: 89,
  description: 'Touches rouges, rétroéclairage RGB',
}

const product2: Product = {
  id: 2,
  name: 'Souris sans fil',
  price: 35,
  description: 'Capteur optique, 6 boutons',
}

const product3: Product = {
  id: 3,
  name: 'Câble USB-C',
  price: 12,
}

service.create(product1)
service.create(product2)
service.create(product3)

const id = Number(process.argv[2])

try {
  const product = service.findOne(id)

  console.log(`Nom : ${product.name}`)
  console.log(`Prix : ${product.price} €`)
  console.log(`Description : ${product.description ?? 'Pas de description'}`)
} catch (error) {
  if (error instanceof ProductNotFoundError) {
    console.log(error.message)
  } else {
    throw error
  }
}
