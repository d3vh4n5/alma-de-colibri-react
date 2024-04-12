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
    <div className="bg-white w-52 h-80 rounded shadow relative">
      {/* <img src={product.image} alt="Product Image" /> */}
      <div className="border-b bg-black rounded-t overflow-hidden">
        <img src="/logo.png" alt="Product Image" />
      </div>
      <div className="p-2">
        <span className="rounded-full bg-[#ff6c47] text-white absolute top-2 px-2 right-[-10px] rotate-45">{product.related_discount} Promo</span>
        <h4 className="font-medium">{product.name}</h4>
        <h3 className="text-green-500 font-medium text-2xl mb-3">$ {product.price}<span className="text-lg">/gr</span></h3>
        <p className="text-gray-400">{product.description}</p>
        <button>Comprar</button>
        <button>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ProductCard