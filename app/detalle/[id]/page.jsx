import ProductDetail from "@/components/Products/ProductDetails"



const DetailPage = ({params}) => {
    const {id} = params;

    return (
        <main className="container m-auto mt-10">
            <ProductDetail id={id}/>
        </main>
    )
}

export default DetailPage