import { createContext, useState } from "react";


export const UserContext = createContext();

    const validarToken = localStorage.getItem("token") || null;

    const UserProvider = ({children}) => {
        const [token, setToken] = useState(validarToken);
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');  
        const [user, setUser] = useState("")   //Token

        const handleSubmit = async (e) => {
            e.preventDefault()
            const response = await fetch("http://localhost:5000/api/auth/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
        const data = await response.json();

        alert(data?.error || "Authentication successful!");
        localStorage.setItem("token", data.token);
        setToken(data.token || null);
        setEmail(data.email)
        }

        const validar = async () => {
        const response = await fetch('http://localhost:5000/api/auth/me', {
           headers: {
             Authorization: `Bearer ${token}`,
           },
         });

         const data = await response.json();
        setUser(data.email);
        return data;
        };

        const logout =() => {
        localStorage.clear()
        setUser(null)
        setToken(null)
        }

        return(
        <UserContext.Provider value={{token, setToken, logout, validar, setEmail user, setUser, setPassword, handleSubmit}}>
            {children}
        </UserContext.Provider>
        )
}

export default UserProvider 