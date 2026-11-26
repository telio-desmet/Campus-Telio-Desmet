export interface Product {
  id: number
  name: string
  price: number
  description?: string
}

export class ProductNotFoundError extends Error {
  constructor(public readonly id: number) {
    super(`Produit ${id} introuvable`)
    this.name = 'ProductNotFoundError'
  }
}
