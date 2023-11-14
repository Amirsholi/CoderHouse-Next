

import ProductCard from "./ProductCard"


const ProductsList = (props) => {


        return (
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {
                    props.items.map(item => <ProductCard key={item.id} item={item}/>)
                }
            </section>
        )
    
}

export default ProductsList;