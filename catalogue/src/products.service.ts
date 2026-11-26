import { Product, ProductNotFoundError } from './product.js'
import { Logger } from './logger.js'

export class ProductsService {
  private products: Product[] = []

  constructor(private readonly logger: Logger) {}

  create(product: Product): Product {
    this.products.push(product)
    this.logger.log(`Produit créé : ${product.name}`)
    return product
  }

  findAll(): Product[] {
    return [...this.products]
  }

  findOne(id: number): Product {
    const product = this.products.find((candidate: Product) => candidate.id === id)

    if (product === undefined) {
      throw new ProductNotFoundError(id)
    }

    return product
  }
}
