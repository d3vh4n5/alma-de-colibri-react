import { type Product } from "../../types/types";
import ProductCard from "./ProductCard";
import { API_URL } from "../../config";
import { useEffect, useState } from "react";

export default function ProductsContainer(){
    // const endPoint = API_URL + 'products/products';
    const endPoint = API_URL + 'products/';
    const [products, setProducts] = useState<Product[] | null>(null)

    useEffect(()=>{
        fetch(endPoint)
            .then(resp => resp.json())
            .then( data => {
                console.log(data)
                setProducts([...data])
            })
            .catch(e => {
                console.log(e)
            })
    }, [])

    return (
        <>
        {
            products !== null &&
            <div className="max-w-6xl grid grid-cols-5 gap-y-32 mx-auto">
                {products.map((product: Product)=> (
                        <ProductCard product={ product } key={product.id}/>
                ))}  
            </div>
        }
        </>
    )
}