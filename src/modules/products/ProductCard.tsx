/*


Se puede hacer también de esta manera

type Prop = {
  product : Product
}

const ProductCard = ( prop : Prop) => {
  
  console.log(prop.product)

*/


import { type Product } from "@/types/types"

const ProductCard = ( { product } : { product: Product} ) => {
  
  console.log(product)

  return (
    <div>
      <img src={product.image} alt="Product Image" />
      <div>
        <span>{product.related_discount} si tiene descuento esto será un globo</span>
        <h3>{product.price}</h3>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <button>Comprar</button>
        <button>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ProductCard