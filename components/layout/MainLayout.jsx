import Navbar from "../module/navbar"

const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="main-layout d-flex flex-column">
                {children}
            </div>
        </>
    )
}

export default MainLayout