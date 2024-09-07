import React from "react";
import { number } from "../utils/number";
import { Link } from "react-router-dom";

const Navbar = () => {
  const total = 25000;
  const token = false;
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-success ">
        <div class="container-fluid">
          <Link to="/" className="navbar-brand">
            Pizzería Mamma Mía!
          </Link>
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
              <Link
                to="/"
                className="nav-link active m-1 btn bg-dark text-white"
              >
                🍕Home
              </Link>
              {token ? (
                <>
                  <Link to="/login" className="nav-link active m-1">
                    🔒Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/profile" className="nav-link active m-1">
                    🔓Profile
                  </Link>
                  <Link to="/login" className="nav-link active m-1">
                    🔐Login
                  </Link>
                  <Link to="/register" className="nav-link active m-1">
                    🔐Register
                  </Link>
                </>
              )}
            </div>
            <Link to="/cart" className="nav-link active me-4 btn bg-dark p-2 text-white" >
              🛒Total: ${number(total)}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
