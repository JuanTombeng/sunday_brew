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
    const response = await fetch(`${process.env.NEXT_APP_BACKEND_URL}/v1/articles/?category=technology`, {
        method : 'GET'
    })
    const response1 = await fetch(`${process.env.NEXT_APP_BACKEND_URL}/v1/articles/?category=food`, {
        method : 'GET'
    })
    const response2 = await fetch(`${process.env.NEXT_APP_BACKEND_URL}/v1/articles/?category=politics`, {
        method : 'GET'
    })
    const tech = await response.json()
    const techData = tech.data
    const food = await response1.json()
    const foodData = food.data
    const politics = await response2.json()
    const politicsData = politics.data
    const data = await techData.concat(foodData, politicsData)
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
                    <Link href="/main/articles/write" passHref>
                        <Button 
                            className={`${style['hero-button']}`}>
                            Start Writing
                        </Button>
                    </Link>
                </div>
            </section>
            {/* <section className={`${style["filter-tags"]} d-flex flex-column justify-content-center mt-5`}>
                <div className="d-flex justify-content-between">
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
            </section> */}
            <section className={`container d-flex flex-wrap my-5`}>
                {data?.map((item) => {
                    return <Link href={`articles/${item.id}`} passHref key={`${item.id}`}>
                            <a>
                                <ArticleCard image={item.article_picture} title={item.article_title} subtitle={item.article_description} 
                                like={item.likes} time={item.created_at} />
                            </a>
                            </Link>
                })}
                <div className="d-flex flex-column justify-content-center mx-3">
                    <h4 className="article-card-subtitle d-flex justify-content-center" style={{borderBottom : '1px solid black', paddingBottom : '10px'}}>
                        More Articles in the future
                    </h4>
                </div>
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