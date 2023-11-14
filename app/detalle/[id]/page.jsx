import ProductDetail from "@/components/Products/ProductDetails"


const getProductDetail = async (id) => {
    const response = await
    fetch(`https://fakestoreapi.com/products/${id}`)
    return await response.json();
}



const DetailPage = async ({params}) => {
    const {id} = params;
    const item = await getProductDetail(id);
    return (
        <main className="container m-auto mt-10">
            <ProductDetail item={item}/>
        </main>
    )
}

export default DetailPage;