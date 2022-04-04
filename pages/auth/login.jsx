import React, {useState} from "react";
import Link from 'next/link'
import { useRouter } from 'next/router';
import AuthLayout from "../../components/layout/AuthLayout";
import style from '../../styles/Login.module.css'
import Image from 'next/image'

// components
import Input from '../../components/base/Input'
import Button from '../../components/base/Button'

//images
import Google from '../../public/Google.svg'
import Facebook from '../../public/Facebook.svg'
import Twitter from '../../public/Twitter.svg'


const Login = () => {
    const router = useRouter();
    const [form, setForm] = useState({
        email : '',
        password : ''
    })
    const [errorMessage, setErrorMessage] = useState('')
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const data = await fetch('https://sunday-brew.herokuapp.com/v1/users/login', {
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify(form)
            })
            const result = await data.json()
            localStorage.setItem('token', JSON.stringify(result?.data.token))
            router.push('/main/home')
        } catch (error) {
            setErrorMessage(error.message)
        }
    }
    return (
        <>
            <h1 className={`${style['login-title']}`}>
                Login
            </h1>
            <div className="input-form d-flex flex-column mt-3">
                <Input 
                    labelClass={`${style['label-input']} mb-2`} 
                    label="Email Address :"
                    className={`${style['auth-input']} mb-2`}
                    placeholder="Enter your email address"
                    onChange={handleChange}
                    value={form.email}
                    name="email"
                    type="email"
                />
                <Input 
                    labelClass={`${style['label-input']} mb-2`} 
                    label="Password :"
                    className={`${style['auth-input']} mb-2`}
                    placeholder="Enter your email password"
                    onChange={handleChange}
                    value={form.password}
                    name="password"
                    type="password"
                />
                <Button 
                    className={`${style['auth-button']} my-5`}
                    onClick={handleSubmit}>
                    Login
                </Button>
            </div>
            <div className={`${style['login-other']} d-flex justify-content-center my-3`}>
                <div className="d-flex flex-column">
                    <h4 className={`${style['login-other-title']}`}>
                        OR LOGIN WITH
                    </h4>
                    <div className="login-other-logo d-flex">
                        <Image 
                            className='img-fluid'
                            src={Google}
                            alt="Logo Image"
                            width={50}
                            height={50}
                        />
                        <Image 
                            className='img-fluid'
                            src={Facebook}
                            alt="Logo Image"
                            width={50}
                            height={50}
                        />
                        <Image 
                            className='img-fluid'
                            src={Twitter}
                            alt="Logo Image"
                            width={50}
                            height={50}
                        />
                    </div>
                </div>
            </div>
            <div className={`${style['login-middle-label']} d-flex flex-column mt-2`}>
                <h2 className={`${style['middle-label-text']}`}><span>Don’t have an account?</span></h2>
                <Link href='/auth/signup'>
                    <Button 
                        className={`${style['auth-signup-now']} mt-3`}>
                        Sign Up Now
                    </Button>
                </Link>
                {
                    errorMessage && <h2 className={errorMessage}></h2>
                }
            </div>
        </>
    )
}

Login.getLayout = function getLayout(children) {
    return (
      <AuthLayout>
        {children}
      </AuthLayout>
    )
}

export default Login