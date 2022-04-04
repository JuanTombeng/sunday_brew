import MainLayout from "../../components/layout/MainLayout"
import Image from 'next/image'
import style from '../../styles/Category.module.css'
import Button from "../../components/base/Button"
import CategoryCard from "../../components/module/CategoryCard"
import dummy1 from '../../public/dummy1.jpg'
import dummy2 from '../../public/dummy2.svg'
import filterIcon from '../../public/filter-icon.svg'
import Dropdown from 'react-bootstrap/Dropdown'


export const getServerSideProps = async () => {
    const response = await fetch("https://sunday-brew.herokuapp.com/v1/categories/", {
        method : 'GET'
    })
    const data = await response.json()
    return {
        props : {
            data : data
        }
    }
}

const Category = ({data}) => {
    return (
        <>
            <section className={`${style['main-wrapper']} d-flex`}>
                <div className={`${style['hero-wrapper']} d-flex flex-column`}>
                    <h1 className={`${style['hero-text']}`}>
                        Choose Article by Category
                    </h1>
                    <p className={`${style['hero-parag']}`}>
                        Category helps you to read another article that you haven’t thought before. You able to read all articles for free. Enjoy the reading!
                    </p>
                </div>
            </section>
            <section className={`${style["filter-tags"]} d-flex flex-column`}>
                <div className="d-flex justify-content-between mb-3">
                    <div className="d-flex">
                        <Dropdown>
                            <Dropdown.Toggle 
                                style={{ background: 'none', border: 'transparent', width: 70, height : 70, marginRight: '10px', boxShadow: 'none'}} 
                                variant="primary" id="dropdown-basic">
                                <Image 
                                    className='img-fluid pb-2'
                                    src={filterIcon}
                                    alt="Logo Image"
                                    width={50}
                                    height={50}
                                />
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{ width: 200}}>
                                <Dropdown.Item href="#/section-1">Name (A - Z)</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Name (Z - A)</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Last Added</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Last Modified</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <p className={`${style["filter-tags-title"]} d-flex`}>
                            Sort by Last Added
                        </p>
                    </div>
                    <p className={`${style["filter-tags-subtitle"]} d-flex`}>
                        18 categories
                    </p>
                </div>
                
            </section>
            <section className={`${style["display-category"]} d-flex flex-wrap justify-content-center`}>
                {data?.data.map((item) => {
                    return <CategoryCard key={item.id} title={item.category_name} image={item.category_picture === null ? dummy1 : item.category_picture} />
                })}
            </section>
        </>
    )
}

Category.getLayout = function getLayout(children) {
    return (
      <MainLayout>
        {children}
      </MainLayout>
    )
}

export default Category