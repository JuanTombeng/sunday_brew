import React, {useState} from "react";
import MainLayout from "../../components/layout/MainLayout"
import Link from 'next/link'
import { useRouter } from 'next/router';
import style from '../../styles/Profile.module.css'

const Profile = () => {
    return (
        <>
            <section className="container-fluid d-flex p-0">
                <div className={`${style['left-container']} d-flex`}>

                </div>
                <div className={`${style['right-container']} d-flex flex-column`}>
                    <div className={`${style['top']} d-flex`}>

                    </div>
                    <div className={`${style['middle']} d-flex`}>
                    </div>
                    <div className={`${style['bottom']} d-flex`}>
                    </div>
                </div>
            </section>
        </>
    )
}

Profile.getLayout = function getLayout(children) {
    return (
      <MainLayout>
        {children}
      </MainLayout>
    )
}

export default Profile