import react from "react";
import Image from 'next/image'
import tea from '../../public/tea.svg'
import Button from "../base/Button";

const Navbar = (props) => {
    return (
        <>
            <nav className="navbar d-flex px-5 w-100">
                <div className="navbar-left d-flex">
                    <h2 className="app-title">
                        Morning Brew
                    </h2>
                    <Image 
                        className='img-fluid pb-2'
                        src={tea}
                        alt="Logo Image"
                        width={50}
                        height={50}
                    />
                </div>
                <div className="navbar-middle d-flex justify-content-between">
                    <div className="nav-item nav-active">
                        Home
                    </div>
                    <div className="nav-item">
                        Article
                    </div>
                    <div className="nav-item">
                        Category
                    </div>
                    <div className="nav-item">
                        About
                    </div>
                </div>
                <div className="navbar-right d-flex justify-content-center">
                    <Button 
                        className="navbar-button"
                        children="Login"
                    />
                    <Button 
                        className="navbar-button white"
                        children="Sign Up"
                    />
                </div>
            </nav>
        </>
    )
}

export default Navbar