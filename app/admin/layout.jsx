


const AdminLayout = ({children}) =>{


return (
    <div className="contenedor">

    <h2 className="text-2xl mt-3 mb-5 border-b">Admin</h2>
      
      
    



        <div className="flex p-2">
          {children}
        </div>
    </div>
  )
}

export default AdminLayout;