
const Boton = ({ children, className = '', ...args }) => {

    return (
        <button 
            className={`rounded-lg py-2 px-4 bg-red-500 text-white text-center ${className}`} 
            {...args}
        >
            {children}
        </button>
    )
}

export default Boton