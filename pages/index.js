import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainLayout from "../components/layout/MainLayout"
import Link from "next/link";
import style from '../styles/Home.module.css'
import Button from "../components/base/Button"
import CategoryCard from "../components/module/CategoryCard"
import ArticleCard from "../components/module/ArticleCard"
import LatestCard from "../components/module/LatestCard"
import dummy1 from '../public/dummy1.jpg'
import dummy2 from '../public/dummy2.svg'
import savings from '../public/savings.svg'
import ReactPlayer from 'react-player'


export const getServerSideProps = async () => {
    const response = await fetch(`${process.env.NEXT_APP_BACKEND_URL}/v1/categories/`, {
        method : 'GET'
    })
  const responseArticle = await fetch(`${process.env.NEXT_APP_BACKEND_URL}/v1/articles/?category=technology`, {
      method : 'GET'
  })
  // const responseLatest = await fetch("http://localhost:4000/v1/articles/home", {
  //     method : 'GET'
  // })
  const dataCategories = await response.json()
  const dataArticle = await responseArticle.json()
  // const dataLatest = await responseLatest.json()
  return {
      props : {
          categories : dataCategories,
          articles : dataArticle,
          // dataLatest : dataLatest
      }
  }
}

// const Landing = () => {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Sunday Brew</title>
//       </Head>
//     </div>
//   )
// }

const Home = ({categories, articles}) => {
  console.log(articles)
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
          {/* <section className={`container d-flex flex-column flex-fill my-5`}>
              <div className="d-flex justify-content-between mb-3">
                  <p className={`${style["popular-tags-title"]} d-flex`}>
                      Popular Tags
                  </p>
                  <Link href='/main/category' passHref>
                      <p className={`${style["popular-tags-subtitle"]} d-flex`}>
                          More
                      </p>
                  </Link>
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
          </section> */}
          <section className={`container d-flex flex-column justify-content-center my-5`}>
              <div className="d-flex justify-content-center mb-3">
                  <p className={`${style["popular-tags-title"]} d-flex`}>
                      Category
                  </p>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                  {
                      categories?.data.slice(0,4).map((item) => {
                          return <CategoryCard key={item.id} 
                          title={item.category_name} 
                          image={item.category_picture} 
                          description={`${item.category_description.slice(0, 57)}...`}
                          />
                      })
                  }
                  <div className="d-flex ms-3">
                    <Link href='/main/category' passHref>
                      <p className={`${style["category-card"]} text-center`} style={{cursor : 'pointer'}}>See More</p>
                    </Link>
                  </div>
              </div>
          </section>
          <section className={`container d-flex flex-column my-5`}>
              <div className="d-flex justify-content-center mb-3">
                  <p className={`${style["popular-tags-title"]} d-flex`}>
                      Recommended
                  </p>
              </div>
              <div className={`container d-flex justify-content-center align-items-center`}>
                  {articles?.data.slice(0,4).map((item) => {
                      return <Link href={`/main/articles/${item.id}`} passHref key={`${item.id}`}>
                              <a>
                                  <ArticleCard key={item.id} image={item.article_picture} title={item.article_title}
                                  like={item.likes} time={item.created_at} />
                              </a>
                              </Link>
                  })}
              </div>
          </section>
          <section className={`${style["short-video-tags"]} d-flex prime`}>
              <div className={`${style["short-video-left"]} d-flex flex-column justify-content-evenly`}>
                  <h2 className={`${style["video-title"]}`}>
                      Let's hear about Kayla's success story
                  </h2>
                  <h2 className={`${style["video-subtitle"]}`}>
                      See how well News Today works in a real user’s life. 
                  </h2>
                  <Button 
                      className={`${style['short-video-button']}`}>
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
          <section className={`container d-flex flex-column my-5`}>
              <div className="d-flex justify-content-center mb-4">
                  <p className={`${style["popular-tags-title"]} d-flex`}>
                      Latest News
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
