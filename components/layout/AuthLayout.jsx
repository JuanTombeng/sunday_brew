import Image from 'next/image'
import authBg from '../../public/auth-bg.svg'
import tea from '../../public/tea.svg'
import leftArrow from '../../public/left-arrow.svg'
import Link from "next/link";


const AuthLayout = ({ children }) => {
    return (
        <div className="auth-layout d-flex">
            <div className="left d-flex flex-column p-4 justify-content-between">
                <div className="back-to-home d-flex">
                    <Link href="/" passHref>
                        <p className="back-home-text">
                            <Image
                                className='img-fluid icon-tea'
                                src={leftArrow}
                                alt="Picture tea Icon"
                                width={30}
                                height={30}
                            />
                            Home Page
                        </p>

                    </Link>

                </div>
                <div className="text mt-3">
                    <div className='d-flex justify-content-center align-items-center'>
                        <h1 className="auth-layout-title me-2">
                            Sunday Brew
                        </h1>
                        <Image
                            className='img-fluid icon-tea mb-2'
                            src={tea}
                            alt="Picture tea Icon"
                            width={65}
                            height={65}
                        />
                    </div>
                    <h4 className="auth-layout-subtitle text-center">
                        Your favorite news app!
                    </h4>
                </div>
                <div className="pic d-flex flex-column">
                    <Image
                        className='img-fluid'
                        src={authBg}
                        alt="Picture of the author"
                        width={400}
                        height={400}
                    />
                </div>
            </div>
            <div className="right d-flex flex-column px-5 py-3">
                {children}
            </div>
        </div>
    )
}

export default AuthLayout