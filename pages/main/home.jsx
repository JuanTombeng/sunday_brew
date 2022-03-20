import MainLayout from "../../components/layout/MainLayout"
import Image from 'next/image'
import style from '../../styles/Home.module.css'
import Button from "../../components/base/Button"
import dummy from '../../public/dummy.jpg'

const Home = () => {
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
                        className={`${style['hero-button']}`}
                        children="Start Exploring"
                    />
                </div>
            </section>
            <section className={`${style["popular-tags"]} d-flex`}>
                
            </section>
            <section className={`${style["category-tags"]} d-flex flex-column`}>
                <p className={`${style["category-tags-title"]} d-flex`}>
                    Category
                </p>
                <div className="d-flex">
                    <div className={`${style["category-tags-cards"]} d-flex flex-column mx-3`}>
                        <Image 
                            className='img-fluid tags-rounded'
                            src={dummy}
                            alt="Logo Image"
                            width={200}
                            height={200}
                        />
                        <p className={`${style["category-tags-name"]} d-flex`}>
                            Covid-19
                        </p>
                    </div>
                    <div className={`${style["category-tags-cards"]} d-flex flex-column mx-3`}>
                        <Image 
                            className='img-fluid tags-rounded'
                            src={dummy}
                            alt="Logo Image"
                            width={200}
                            height={200}
                        />
                        <p className={`${style["category-tags-name"]} d-flex`}>
                            Covid-19
                        </p>
                    </div>
                    <div className={`${style["category-tags-cards"]} d-flex flex-column mx-3`}>
                        <Image 
                            className='img-fluid tags-rounded'
                            src={dummy}
                            alt="Logo Image"
                            width={200}
                            height={200}
                        />
                        <p className={`${style["category-tags-name"]} d-flex`}>
                            Covid-19
                        </p>
                    </div>
                </div>
            </section>
            <section className={`${style["recommended-tags"]}`}>

            </section>
            <section className={`${style["short-video-tags"]}`}>

            </section>
            <section className={`${style["latest-news-tags"]}`}>

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