import { createContext, useState, useEffect } from "react"

export const ApiContext = createContext()

const ApiProvider = ({children}) =>{

    const [pizzas, setPizzas] = useState([])

    const url = import.meta.env.VITE_URL
    const info = async()=> {
        const response = await fetch(url)
        const data = await response.json()
        setPizzas(data)
    } 

    useEffect(() => {
        info()
    },[])

 return (

    <ApiContext.Provider value={{pizzas}}>
        {children}
    </ApiContext.Provider>
 )


}

export default ApiProvider