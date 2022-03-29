import React, {useState, useEffect} from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import Image from 'next/image'
import userIcon from '../../public/user-icon.svg'
import tea from '../../public/tea.svg'
import notifIcon from '../../public/notif-icon.svg'
import Button from "../base/Button";

const Navbar = () => {
    const [user, setUser] = useState(null)
    useEffect(async () => {
        try {
            const token = JSON.parse(localStorage.getItem('token'))
            const resp = await fetch("http://localhost:4000/v1/users/details   ", {
                method : 'GET',
                headers : {'Authorization': `Bearer ${token}`}
            })
            const data = await resp.json()
            const result = data.data
            setUser(result)
        } catch (error) {
            console.log(error)
        }
    }, [])
    return (
        <nav className="navbar d-flex px-5 w-100">
            <div className="navbar-left d-flex">
                <Link href="/main/home">
                        <h2 className="app-title d-flex">
                            Sunday Brew
                            <Image 
                                className='img-fluid tea-nav-icon pb-3'
                                src={tea}
                                alt="Logo Image"
                                width={50}
                                height={50}
                            />
                        </h2>
                </Link>
            </div>
            <div className="navbar-middle d-flex justify-content-between">
                <Link href="/main/home">
                    <div className="nav-item active">
                        Home
                    </div>
                </Link>
                <Link href="/main/articles">
                    <div className="nav-item">
                        Article
                    </div>
                </Link>
                <Link href="/main/category">
                    <div className="nav-item">
                        Category
                    </div>
                </Link>
                <Link href="/main/about">
                    <div className="nav-item">
                        About
                    </div>
                </Link>
            </div>
            <div className="navbar-right d-flex justify-content-end">
                {
                    user ? (
                        <>
                        <Image 
                            className='img-fluid'
                            src={notifIcon}
                            alt="Logo Image"
                            width={30}
                            height={30}
                        />
                        <div className="nav-user-border ms-4">
                            <Image 
                                className='img-fluid nav-user-icon'
                                src={user.profile_picture === null ? userIcon : user.profile_picture}
                                alt="Logo Image"
                                width={40}
                                height={40}
                            />
                        </div>
                        </>
                    ) : (
                        <>
                        <Link href="/auth/login">
                            <Button 
                                className="navbar-button"
                                children="Login"
                            />
                        </Link>
                        <Link href="/auth/signup">
                            <Button 
                                className="navbar-button white"
                                children="Sign Up"
                            />
                        </Link>
                        </>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar