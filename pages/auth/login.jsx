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
                />
                <Input 
                    labelClass={`${style['label-input']} mb-2`} 
                    label="Password :"
                    className={`${style['auth-input']} mb-2`}
                    placeholder="Enter your email password"
                />
                <Button 
                    className={`${style['auth-button']} my-5`}
                    children="Login"
                />
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
                <Button 
                    className={`${style['auth-signup-now']} mt-3`}
                    children="Sign Up Now"
                />
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