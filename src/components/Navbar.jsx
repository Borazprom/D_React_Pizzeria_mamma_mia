import React from 'react';
import { number } from '../utils/number';

const Navbar = () => {
    const total = 25000;
    const token = false;
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-success ">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Pizzería Mamma Mía!</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <div class="navbar-nav me-auto mb-2 mb-lg-0">
                        <a class="nav-link active m-1 btn bg-dark text-white" aria-current="page" href="#">🍕Home</a>
                        {
                            token ? (
                                <>
                                <a class="nav-link active m-1" href="#">🔓Profile</a>
                                <a class="nav-link active m-1" href="#">🔒Logout</a> 
                                </>
                            ):(
                                <>
                                <a class="nav-link active m-1" href="#">🔐Login</a>
                                <a class="nav-link active m-1" href="#">🔐Register</a>
                                </>
                            )
                        }

                        {/* Primera forma */}
                        {/* <li class="nav-item">{token == true ? <a class="nav-link active m-1" href="#">Profile</a> : null}</li>
                        <li class="nav-item">{token == true ? <a class="nav-link active m-1" href="#">Logout</a> : null}</li>
                        <li class="nav-item">{token == false ? <a class="nav-link active m-1" href="#">Login</a> : null}</li>
                        <li class="nav-item">{token == false ? <a class="nav-link active m-1" href="#">Register</a> : null}</li> */}
                   
                    </div>
                    <a class="nav-link active me-4 btn bg-dark p-2 text-white" aria-current="page" href="#">🛒Total: ${number(total)}</a>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar