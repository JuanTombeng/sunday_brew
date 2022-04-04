import React, {useState, useEffect} from "react";
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import MainLayout from "../../../components/layout/MainLayout";
import Input from "../../../components/base/Input";
import Button from "../../../components/base/Button";
import style from '../../../styles/ArticleNew.module.css'

const NewArticle = () => {
    return (
        <>
            <section className="container-fluid d-flex flex-column p-0">
                <div className={`${style['top-wrapper']} d-flex`}>
                    <h3>Back</h3>
                    <h2>Write Article</h2>
                </div>
                <div className={`${style['middle-wrapper']} d-flex`}>
                    <div className={`${style['article-picture-wrapper']} d-flex w-25`}>
                        
                    </div>
                    <div className="d-flex flex-column w-75 ms-2">
                        <div className="d-flex">
                            <Input
                            className={`${style['article-input']} w-50 me-3`}
                            placeholder='Article Title'
                            // onChange={handleForm}
                            // value={form.username}
                            name="username"
                            type="text"
                            />
                            
                            <select
                                className={`${style['article-input']} w-50`}
                                // onChange={handleChange}
                                name="cat_name"
                                // value={form.cat_name}
                                >
                                <option value="Crime">Crime</option>
                                <option value="Economy">Economy</option>
                                <option value="Health">Health</option>
                                <option value="National">National</option>
                                <option value="Politics">Politics</option>
                                <option value="Religion">Religion</option>
                                <option value="Technology">Technology</option>
                                <option value="Trending">Trending</option>
                            </select>
                        </div>
                        <textarea 
                            className={`${style['article-input-desc']}`}
                            placeholder='Type the article'
                            // onChange={handleForm}
                            // value={form.job_description}
                            name="job_description"
                            />
                    </div>
                </div>
                <div className={`${style['bottom-wrapper']} d-flex`}>
                    <div className="d-flex justify-content-center align-items-center w-25 me-2">
                        <Button
                            className={`${style['article-button']}`}>
                            Choose Cover Photo
                        </Button>
                    </div>
                    <div className="d-flex justify-content-center align-items-center w-75 ms-2">
                        <Button
                            className={`${style['article-button']}`}>
                            Request Publish Article
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}

NewArticle.getLayout = function getLayout(children) {
    return (
      <MainLayout>
        {children}
      </MainLayout>
    )
}

export default NewArticle