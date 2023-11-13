import CategoriesMenu from "@/components/Products/Categories"
import ProductsList from "@/components/Products/ProductList"




const Products = () => {


    return (
        <main className="container m-auto">
            <h2 className="text-2xl my-10 border-b pb-4">Productos</h2>

            <div className="flex gap-10">
                <CategoriesMenu />
                <ProductsList />
            </div>
        </main>
    )
}

export default Products