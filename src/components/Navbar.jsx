import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const {total} = useContext(CartContext)
  const {user} = useContext(UserContext)  //Token
  const {logout} = useContext(UserContext)
  const navigate = useNavigate()
  const irALogin = ()=> {
        navigate(`/login`)
    }

//   const setActiveClass = ({ isActive}) => (isActive ? "active" : "notActive")
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-success ">
        <div class="container-fluid">
          <Link to="/" className="navbar-brand">Pizzeria Mamma Mía!</Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <div class="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/"className="nav-link active m-1 btn bg-dark text-white">🍕Home</Link>
              {user ? (
                <>
                  <NavLink to="/profile" onClick={()=> irALogin()}   className="nav-link active m-1">🔓Profile</NavLink>
                  <NavLink to="/login" className="nav-link active m-1" onClick={() => logout()}> 🔒Logout</NavLink>
                </>
              ) : (
                  <>
                  <NavLink to="/login" className="nav-link active m-1 setActiveClass" >🔐Login</NavLink>
                  <NavLink to="/register" className="nav-link active m-1">🔐Register</NavLink>
                </>
              )}
            </div>
            <Link to="/cart" className="nav-link active me-4 btn bg-dark p-2 text-white" >🛒 Total: ${total}</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
