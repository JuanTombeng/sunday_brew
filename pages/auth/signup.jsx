import AuthLayout from "../../components/layout/AuthLayout";
import style from '../../styles/Signup.module.css'
import Image from 'next/image'
import Link from 'next/link'

// components
import Input from '../../components/base/Input'
import Button from '../../components/base/Button'

//images
import Google from '../../public/Google.svg'
import Facebook from '../../public/Facebook.svg'
import Twitter from '../../public/Twitter.svg'

const Signup = () => {
    return (
        <>
            <h1 className={`${style['signup-title']}`}>
                Signup
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
                    placeholder="Enter your password"
                />
                <Input 
                    labelClass={`${style['label-input']} mb-2`} 
                    label="Phone Number :"
                    className={`${style['auth-input']} mb-2`}
                    placeholder="Enter your phone number"
                />
                <Button 
                    className={`${style['auth-button']} my-3`}>
                        Sign Up
                    </Button>
            </div>
            <div className={`${style['signup-other']} d-flex justify-content-center my-3`}>
                <div className="d-flex flex-column">
                    <h4 className={`${style['signup-other-title']}`}>
                        OR SIGN UP WITH
                    </h4>
                    <div className="signup-other-logo d-flex">
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
            <div className={`${style['signup-middle-label']} d-flex flex-column mt-2`}>
                <h2 className={`${style['middle-label-text']}`}><span>Already have an account?</span></h2>
                <Link href='/auth/login' passHref>
                    <Button 
                        className={`${style['auth-signup-now']} mt-3`}>
                            Login Now
                    </Button>
                </Link>
            </div>
        </>
    )
}

Signup.getLayout = function getLayout(children) {
    return (
      <AuthLayout>
        {children}
      </AuthLayout>
    )
}

export default Signup