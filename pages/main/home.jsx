import ReactPlayer from 'react-player'
import MainLayout from "../../components/layout/MainLayout"
import Image from 'next/image'
import Link from "next/link";
import style from '../../styles/Home.module.css'
import Button from "../../components/base/Button"
import CategoryCard from "../../components/module/CategoryCard"
import ArticleCard from "../../components/module/ArticleCard"
import LatestCard from "../../components/module/LatestCard"
import dummy1 from '../../public/dummy1.jpg'
import dummy2 from '../../public/dummy2.svg'

export const getServerSideProps = async () => {
    const response = await fetch("http://localhost:4000/v1/categories/", {
        method : 'GET'
    })
    const responseArticle = await fetch("http://localhost:4000/v1/articles/", {
        method : 'GET'
    })
    const data = await response.json()
    const dataArticle = await responseArticle.json()
    return {
        props : {
            data : data,
            dataArticle : dataArticle
        }
    }
}

const Home = ({data, dataArticle}) => {
    return (
        <>
            <section className={`${style['main-wrapper']} d-flex`}>
                <div className={`${style['hero-wrapper']} d-flex flex-column`}>
                    <h1 className={`${style['hero-text']}`}>
                        Share Information and Educate People
                    </h1>
                    <p className={`${style['hero-parag']}`}>
                        Everyone has their point of view of something, but just don’t be afraid to express the facts. 
                        Be an author and share you prespective of something to the world.
                    </p>
                    <Button 
                        className={`${style['hero-button']}`}>
                            Start Exploring
                    </Button>
                </div>
            </section>
            <section className={`${style["popular-tags"]} d-flex flex-column flex-fill`}>
                <div className="d-flex justify-content-between mb-3">
                    <p className={`${style["popular-tags-title"]} d-flex`}>
                        Popular Tags
                    </p>
                    <p className={`${style["popular-tags-subtitle"]} d-flex`}>
                        More
                    </p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className={`${style["popular-tags-item"]} d-flex`}>
                        #covid-19
                    </p>
                    <p className={`${style["popular-tags-item"]} d-flex`}>
                        #indrakenz
                    </p>
                    <p className={`${style["popular-tags-item"]} d-flex`}>
                        #indrakenz
                    </p>
                    <p className={`${style["popular-tags-item"]} d-flex`}>
                        #indrakenz
                    </p>
                </div>
            </section>
            <section className={`${style["category-tags"]} d-flex flex-column flex-fill`}>
                <div className="d-flex justify-content-between mb-4">
                    <p className={`${style["popular-tags-title"]} d-flex`}>
                        Category
                    </p>
                    <p className={`${style["popular-tags-subtitle"]} d-flex`}>
                        More
                    </p>
                </div>
                <div className="d-flex">
                    {
                        data?.data.map((item) => {
                            return <CategoryCard key={item.id} title={item.category_name} image={item.category_picture} />
                        })
                    }
                </div>
            </section>
            <section className={`${style["recommended-tags"]} d-flex flex-column flex-fill`}>
                <div className="d-flex justify-content-between mb-4">
                    <p className={`${style["popular-tags-title"]} d-flex`}>
                        Recommended
                    </p>
                    <p className={`${style["popular-tags-subtitle"]} d-flex`}>
                        More
                    </p>
                </div>
                <div className={`${style["recommended-tags-overflow"]} d-flex `}>
                    {/* <ArticleCard image={dummy2} />
                    <ArticleCard image={dummy2} /> */}
                    {dataArticle?.data.map((item) => {
                        return <Link href={`articles/${item.id}`} passHref key={`${item.id}`}>
                                    <a>
                                        <ArticleCard key={item.id} image={item.article_picture} title={item.article_title} subtitle={item.article_description} 
                                        like={item.like} time={item.created_at} />
                                    </a>
                                </Link>
                    })}
                </div>
            </section>
            <section className={`${style["short-video-tags"]} d-flex`}>
                <div className={`${style["short-video-left"]} d-flex flex-column justify-content-evenly`}>
                    <h2 className={`${style["video-title"]}`}>
                        Let's hear about Kayla's success story
                    </h2>
                    <h2 className={`${style["video-subtitle"]}`}>
                        See how well News Today works in a real user’s life. 
                    </h2>
                    <Button 
                        className={`${style['hero-button']}`}>
                        Let’s get started
                    </Button>
                </div>
                <div className={`${style["short-video-right"]} d-flex justify-content-center align-items-center`}>
                    <ReactPlayer controls
                        url='https://www.youtube.com/watch?v=i9UYbJ2xMTI'
                        style={{borderRadius: 20}}
                    />
                </div>
            </section>
            <section className={`${style["latest-news-tags"]} d-flex flex-column`}>
                <div className="d-flex justify-content-between mb-4">
                    <p className={`${style["popular-tags-title"]} d-flex`}>
                        Latest News
                    </p>
                    <p className={`${style["popular-tags-subtitle"]} d-flex`}>
                        More
                    </p>
                </div>
                <div className="d-flex flex-column">
                    <LatestCard image={dummy1} />
                    <LatestCard image={dummy1} />
                </div>

            </section>
        </>
    )
}

Home.getLayout = function getLayout(children) {
    return (
      <MainLayout>
        {children}
      </MainLayout>
    )
}

export default Home