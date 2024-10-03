import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({children})=>{

       // Estados del Carrito y del Total
const [cart, setCart] = useState([])
const [total, setTotal] = useState(0)

       
const agregarPizza = (pizza) => {
    const itemEnCart = cart.find(item => item.id === pizza.id)
    if (itemEnCart){
        setCart(cart.map(item => 
            item.id === pizza.id ? {...item, cant: item.cant + 1 } : item))
    }else {
        setCart([...cart, {...pizza, cant:1}])
        // alert("Se agrego correctamente")
    }
}
    const eliminarDelCart = (id) => { 
        setCart(cart.filter(item => item.id !== id)
       )
    }
    const aumentarPizza = (pizza) => {
        setCart ( cart.map(item => item.id === pizza.id ?
            {...item, cant: item.cant + 1 } : item )
        )
    }
    const disminuirPizza = (pizza) => {
        if (pizza.cant === 1) {
            eliminarDelCart(pizza.id)
        }else {
            setCart(
                cart.map(item => item.id === pizza.id ?
                    {...item, cant: item.cant - 1} : item )
                )
            }
        }

    //Calcular el total 
    useEffect (() => {
        const totalGeneral = cart.reduce((acc, pizza) => acc + pizza.price * pizza.cant, 0)
        setTotal(totalGeneral)
    }, [cart])

    return (
        <CartContext.Provider value={ {cart, setCart, total, setTotal, agregarPizza, eliminarDelCart, aumentarPizza, disminuirPizza }}>
            {children}
        </CartContext.Provider>

    )
}

export default CartProvider