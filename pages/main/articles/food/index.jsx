import MainLayout from "../../../../components/layout/MainLayout"
import Image from 'next/image'
import Link from "next/link";
import style from '../../../../styles/Article.module.css'
import Button from "../../../../components/base/Button"
import ArticleCard from "../../../../components/module/ArticleCard"

export const getServerSideProps = async () => {
    const response = await fetch(`${process.env.NEXT_APP_BACKEND_URL}/v1/articles/?category=food`, {
        method : 'GET'
    })
    const data = await response.json()
    return {
        props : {
            data : data
        }
    }
}

const ArticleFood = ({data}) => {
    return (
        <>
            <section className={`${style['main-wrapper']} d-flex`}>
                <div className={`${style['hero-wrapper']} d-flex flex-column`}>
                    <h1 className={`${style['hero-text']}`}>
                        Food Articles
                    </h1>
                    <p className={`${style['hero-parag']}`}>
                        Healthy food provides us the nutrients and energy to develop and grow, be active and healthy, to move, play, work, think and learn.
                    </p>
                    <Link href="/main/articles/write" passHref>
                        <Button 
                            className={`${style['hero-button']}`}>
                            Start Writing
                        </Button>
                    </Link>
                </div>
            </section>
            <section className={`container d-flex flex-wrap my-5`}>
                {data?.data.map((item) => {
                    return <Link href={`/main/articles/${item.id}`} passHref key={`${item.id}`}>
                            <a>
                                <ArticleCard image={item.article_picture} title={item.article_title} subtitle={item.article_description} 
                                like={item.like} time={item.created_at} />
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

ArticleFood.getLayout = function getLayout(children) {
    return (
      <MainLayout>
        {children}
      </MainLayout>
    )
}

export default ArticleFood