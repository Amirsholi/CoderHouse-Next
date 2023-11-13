"use client"
import { usePathname } from "next/navigation"
import ProductCard from "./ProductCard"


const getProducts = async () => {
    const response = await 
    fetch(`https://fakestoreapi.com/products`, {
        cache: 'force-cache',
    })
    return await response.json()
}


const getProductsByCat = async (cat) => {
    const response = await 
    fetch(`https://fakestoreapi.com/products/category/${cat}`, {
        cache: 'force-cache',
    })
    return await response.json()
}

const ProductsList = () => {

    const path = usePathname();

    if(path === "/productos/todos"){

        const items = await getProducts();

        return (
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {
                    items.map(item => <ProductCard key={item.id} item={item}/>)
                }
            </section>
        )
    }else{
        const items = await getProductsByCat(path.substring(11));

        return (
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {
                    items.map(item => <ProductCard key={item.id} item={item}/>)
                }
            </section>
        )
    }
}

export default ProductsList;