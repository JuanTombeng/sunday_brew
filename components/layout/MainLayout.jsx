import Navbar from "../module/navbar"
import Footer from "../module/footer"

const MainLayout = ({ children }) => {
    return (
        <div className="main-layout">
            <Navbar />
            <div className="main-layout-content d-flex flex-column">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout