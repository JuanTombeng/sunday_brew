import MainLayout from "../../components/layout/MainLayout"
import Image from 'next/image'
import Link from "next/link";
import style from '../../styles/Category.module.css'
import Button from "../../components/base/Button"
import CategoryCard from "../../components/module/CategoryCard"
import dummy1 from '../../public/dummy1.jpg'
import dummy2 from '../../public/dummy2.svg'
import filterIcon from '../../public/filter-icon.svg'
import Dropdown from 'react-bootstrap/Dropdown'


export const getServerSideProps = async () => {
    const response = await fetch(`${process.env.NEXT_APP_BACKEND_URL}/v1/categories/`, {
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
    console.log(data)
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
            <section className={`container d-flex flex-wrap justify-content-center my-5`}>
                {data?.data.map((item) => {
                    return (
                        <div className={`${style['category-card']} d-flex my-3`} key={item.id}>
                            <Image
                                className={`${style['category-card-image']} d-flex w-25`}
                                src={item && item.category_picture}
                                alt="Logo Image"
                                width={260}
                                height={200}
                            />
                            <div className='d-flex flex-column justify-content-between flex-fill px-3 w-75'>
                                <div className="d-flex h-25 pb-2" style={{borderBottom : '1px solid #11468F'}}>
                                    <h2 className={`${style['category-card-title']}`}>{item && item.category_name}</h2>
                                </div>
                                <div className='d-flex align-items-center h-75 justify-content-between'>
                                    <div className="d-flex flex-column w-75">
                                        <p className={`${style['category-card-subtitle']}`}>{item && item.category_description}</p>
                                        <p className={`${style['category-card-time']}`}>Created :
                                            {item && item.created_at}
                                        </p>
                                    </div>
                                    <Link href={`articles/${item && item.category_name.toLowerCase()}`} passHref>
                                        <Button
                                            className={`${style['hero-button']}`}>
                                            See Articles
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
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