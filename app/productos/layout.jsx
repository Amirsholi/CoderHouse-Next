import CategoriesMenu from "@/components/Products/Categories";


const ProductLayout = ({children}) => {
  return (
    <div className="contenedor">
      <h2 className="text-2xl mt-3 mb-5 border-b">Productos</h2>
      
      <div className="flex w-full gap-4">                

        <div className="w-[15%] flex flex-col gap-2 p-2">
          <CategoriesMenu />
        </div>

        <div className="flex-1 p-2">
          {children}
        </div>
      </div>
    </div>
  )
}

export default ProductLayout;


