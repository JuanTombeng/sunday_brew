import MainLayout from "../../../components/layout/MainLayout"
import Image from 'next/image'
import style from '../../../styles/ArticleDetails.module.css'
import Button from "../../../components/base/Button"
import ArticleCard from "../../../components/module/ArticleCard"
import dummy1 from '../../../public/dummy1.jpg'
import dummy2 from '../../../public/dummy2.svg'
import filterIcon from '../../../public/filter-icon.svg'
import Dropdown from 'react-bootstrap/Dropdown'
import moment from 'moment';
import saveItem from '../../../public/saveItem.svg'


export const getServerSideProps = async ({params}) => {
    const response = await fetch(`${process.env.NEXT_APP_BACKEND_URL}/v1/articles/${params.id}`, {
        method : 'GET'
    })
    const data = await response.json()
    const [article] = data.data
    return {
        props : {
            article : article
        }
    }
}

const ArticleDetails = ({article}) => {
    console.log(article)
    return (
        <>
            <section className={`${style['main-wrapper']}`}>
                <div className="d-flex justify-content-center my-5">
                    <h2 className={`${style['article-details-heading']}`}>Article Viewer</h2>
                </div>
            </section>
            <section className={`container d-flex`}>
                <div className="d-flex w-50 h-100">
                    <Image
                        className='img-fluid'
                        src={article ? article.article_picture : 'Loading..'}
                        alt="Logo Image"
                        width={600}
                        height={400}
                    />
                </div>
                <div className="d-flex w-50 h-100 flex-column justify-content-evenly align-items-start ms-3">
                    <h2 className={`${style['article-detail-title']}`}>{article.article_title}</h2>
                    <div className="d-flex align-items-start my-3">
                        <Image
                            className='img-fluid'
                            src={article ? article.profile_picture : 'Loading..'}
                            alt="Logo Image"
                            width={60}
                            height={60}
                        />
                        <div className='d-flex flex-column ms-2'>
                            <h4 className={`${style['article-detail-author']}`}>{article.fullname}</h4>
                            <p className={`${style['article-detail-date']}`}>{moment(article.created_at).format('DD MMM, YYYY')}</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                        <p className={`${style['article-detail-author']}`}>Likes :  {article.likes}</p>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                        <Image
                            className='img-fluid'
                            src={saveItem}
                            alt="Logo Image"
                            height={40}
                            width={40}
                        />
                        <p className={`${style['article-detail-author']}`}>Save Article</p>
                    </div>
                </div>
            </section>
            <section className={`container d-flex mt-5 py-5`}>
                <p className={`${style['article-detail-parag']}`}>{article.article_description}</p>
            </section>
        </>
    )
}

ArticleDetails.getLayout = function getLayout(children) {
    return (
      <MainLayout>
        {children}
      </MainLayout>
    )
}

export default ArticleDetails