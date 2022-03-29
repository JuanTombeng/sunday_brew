import MainLayout from "../../../components/layout/MainLayout"
import Image from 'next/image'
import Link from "next/link";
import style from '../../../styles/Article.module.css'
import Button from "../../../components/base/Button"
import ArticleCard from "../../../components/module/ArticleCard"
import dummy1 from '../../../public/dummy1.jpg'
import dummy2 from '../../../public/dummy2.svg'
import filterIcon from '../../../public/filter-icon.svg'
import Dropdown from 'react-bootstrap/Dropdown'

export const getServerSideProps = async () => {
    const response = await fetch("http://localhost:4000/v1/articles/", {
        method : 'GET'
    })
    const data = await response.json()
    return {
        props : {
            data : data
        }
    }
}

const Article = ({data}) => {
    console.log(data)
    return (
        <>
            <section className={`${style['main-wrapper']} d-flex`}>
                <div className={`${style['hero-wrapper']} d-flex flex-column`}>
                    <h1 className={`${style['hero-text']}`}>
                        Start Writing an Article
                    </h1>
                    <p className={`${style['hero-parag']}`}>
                        You can be an author by being active in reading artciles in a month or you can request to be an author if you have been a member for three months.
                    </p>
                    <Button 
                        className={`${style['hero-button']}`}
                        children="Start Writing"
                    />
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
            <section className={`${style["display-article"]} d-flex flex-wrap justify-content-center`}>
                {data?.data.map((item) => {
                    return <Link href={`articles/${item.id}`}>
                            <a>
                                <ArticleCard key={item.id} image={item.article_picture} title={item.article_title} subtitle={item.article_description} 
                                like={item.like} time={item.created_at} />
                            </a>
                            </Link>
                })}
            </section>
        </>
    )
}

Article.getLayout = function getLayout(children) {
    return (
      <MainLayout>
        {children}
      </MainLayout>
    )
}

export default Article