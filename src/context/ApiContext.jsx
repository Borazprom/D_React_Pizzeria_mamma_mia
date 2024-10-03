import { createContext, useState, useEffect } from "react"

export const ApiContext = createContext()

const ApiProvider = ({children}) =>{

    const [pizzas, setPizzas] = useState([])

    const info = async()=> {
        const result = await fetch("http://localhost:5000/api/pizzas")
        const data = await result.json()
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