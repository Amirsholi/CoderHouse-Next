
import ProductsList from "@/components/Products/ProductList";





const getProducts = async () => {
  const response = await fetch(`https://fakestoreapi.com/products`);
  return await response.json();
};







const Products = async ({ params }) => {
  const { categoria } = params;
  const products = await getProducts(); // Array por defecto de la API

  const productsList =
    categoria === "todos"
      ? products
      : products.filter(
          (prod) => prod.category.toLowerCase() === categoria.toLowerCase()
        );

  return (
    <main className="container m-auto">
      {
        productsList.length === 0 && (
          <div className=" h-[160px] flex items-center justify-center">
            <p className="text-lg">No hay productos para la categoría <span className="font-bold">{categoria.toUpperCase()}</span></p>
          </div>
        )
      }
      <ProductsList items={productsList}/>
    </main>
  );
};

export default Products;
