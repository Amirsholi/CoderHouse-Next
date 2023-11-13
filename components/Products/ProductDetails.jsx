import QtySelector from "./QtySelector"
import GoBack from "../ui/GoBack"
import Image from "next/image";


const getProductDetail = async (id) => {
    const response = await
    fetch(`https://fakestoreapi.com/products/${id}`, {
        cache: 'force-cache',
    })
    return await response.json();
}


const ProductDetail = async (props) => {

    const item = await getProductDetail(props.id);

    return (
        <div className=" container max-w-4xl m-auto">
            <GoBack className="text-sm text-blue-500 underline mb-6" />
            <section className="flex gap-6">
            <div className="relative basis-1/2">
                    <Image
                        src={item.image}
                        alt={item.title}
                        width={500}
                        height={100}
                        className={"w-full h-[300px] object-contain "}
                    />
                </div>
                <div className="basis-1/2">
                    <h2 className="text-2xl font-semibold border-b border-gray-200 pb-4 mb-4">{item.title}</h2>
                    <p className="text-4xl">$ {item.price}</p>

                    <QtySelector />
                </div>
            </section>
            <section className="containermt-12">
                <h4 className="text-xl font-semibold border-b border-gray-200 pb-4 my-4">Descripcion</h4>
                <p className="text-gray-600">{item.description}</p>
            </section>
        </div>
    )
}

export default ProductDetail