import Image from 'next/image'
import authBg from '../../public/auth-bg.svg'
import tea from '../../public/tea.svg'
import leftArrow from '../../public/left-arrow.svg'

const AuthLayout = ({ children }) => {
    return (
        <div className="auth-layout d-flex">
            <div className="left d-flex flex-column p-4 justify-content-between">
                <div className="back-to-home d-flex">
                    <Image
                        className='img-fluid icon-tea'
                        src={leftArrow}
                        alt="Picture tea Icon"
                        width={30}
                        height={30}
                    />
                    <p className="back-home-text">
                        Home Page
                    </p>
                </div>
                <div className="text mt-3">
                    <div className='d-flex justify-content-center align-items-center'>
                        <h1 className="auth-layout-title">
                            Morning Brew
                        </h1>
                        <Image
                            className='img-fluid icon-tea ms-2 mb-2'
                            src={tea}
                            alt="Picture tea Icon"
                            width={70}
                            height={70}
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