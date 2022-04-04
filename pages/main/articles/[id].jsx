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
    const response = await fetch(`http://localhost:4000/v1/articles/${params.id}`, {
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
            <section className={`${style['main-wraper']}`}>
                <div className="d-flex justify-content-center my-5">
                    <h2 className={`${style['article-details-heading']}`}>Article Viewer</h2>
                </div>
            </section>
            <section className={`${style['article-upper']} d-flex`}>
                <div className="d-flex w-50 h-100 me-2">
                    <div style={{width: '100%', height: '100%', position: 'relative'}}>
                        <Image 
                            className='img-fluid pb-2'
                            src={article ? article.article_picture : 'Loading..'}
                            alt="Logo Image"
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>
                </div>
                <div className="d-flex w-50 h-100 flex-column justify-content-evenly align-items-start ms-3">
                    <h2 className={`${style['article-detail-title']}`}>{article.article_title}</h2>
                    <div className="d-flex flex-column align-items-start my-3">
                        <h4 className={`${style['article-detail-author']}`}>{article.fullname}</h4>
                        <p className={`${style['article-detail-date']}`}>{moment(article.created_at).format('DD MMM, YYYY')}</p>
                    </div>
                    <div className="d-flex mb-3">
                        <p className={`${style['article-detail-author']}`}>{article.likes}</p>
                        <Image 
                            className='img-fluid pb-2'
                            src={saveItem}
                            alt="Logo Image"
                            height={40}
                            width={40}
                        />
                    </div>
                    <Button 
                        className={`${style['article-detail-button']} w-100`}>
                        Start Exploring
                    </Button>
                </div>
            </section>
            <section className={`${style['article-lower']} d-flex my-3`}>
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