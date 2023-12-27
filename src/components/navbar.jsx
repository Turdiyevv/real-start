import React from "react";
import {Link} from "react-router-dom";
import {logo} from '../constants'

const Navbar = () => {
    return(
        <div className=' bg-body-tertiary container
        d-flex flex-md-row flex-column align-item-center
        border-bottom pt-3 pb-3 mb-4'>
            <Link to={'/'} className={''}>
                <img alt="" width='100px' height='50px' src={logo}/>
            </Link>
            <nav className="navbar d-inline-flex mt-md-0 ms-md-auto">
                <Link className='me-3 py-2 text-dark text-decoration-none' to={'/login'}>Login</Link>
                <Link className='me-3 py-2 text-dark text-decoration-none' to={'/register'}>Register</Link>
            </nav>
        </div>
    )
}
export default Navbar