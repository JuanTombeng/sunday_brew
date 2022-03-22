import Image from 'next/image'
import tea from '../../public/tea.svg'

const Footer = () => {
    return (
        <footer className="footer-wrapper d-flex justify-content-between">
            <div className="d-flex flex-column justify-content-evenly">
                <p className="footer-subtitle">
                    Why News Today
                </p>
                <p className="footer-subtitle">
                    Be an author
                </p>
                <p className="footer-subtitle">
                    Community
                </p>
                <p className="footer-subtitle">
                    FAQ
                </p>
            </div>
            <div className="d-flex flex-column justify-content-evenly align-items-end py-5">
                <div className="d-flex">
                    <p className="footer-title mb-3 me-2">
                        Morning Brew
                    </p>
                    <Image 
                        className='img-fluid pb-3'
                        src={tea}
                        alt="Logo Image"
                        width={50}
                        height={50}
                    />
                </div>
                <p className="footer-subtitle">
                    Jendral Sudirman Street No. 23
                </p>
                <p className="footer-subtitle">
                    Jakarta, Indonesia
                </p>
                <p className="footer-subtitle">
                    (621)989898934
                </p>
                <p className="footer-subtitle">
                    morning.brew@gmail.com
                </p>
            </div>
        </footer>
    )
}

export default Footer