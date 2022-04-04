import React, {useState, useEffect} from "react";
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import MainLayout from "../../components/layout/MainLayout"
import Input from "../../components/base/Input";
import Button from "../../components/base/Button";
import style from '../../styles/Profile.module.css'
import defaultPict from '../../public/user-default.svg'

const Profile = () => {
    const route = useRouter()
    const [user, setUser] = useState(null)
    const [form, setForm] = useState({
        username : '',
        fullname : '',
        email : '',
        password : '',
        job_title : '',
        job_description : ''
    })
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = JSON.parse(localStorage.getItem('token'))
                const resp = await fetch("http://localhost:4000/v1/users/details", {
                    method : 'GET',
                    headers : {'Authorization': `Bearer ${token}`}
                })
                const data = await resp.json()
                const result = data.data
                setUser(result)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    const handleForm = (e) => {
        e.preventDefault()
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handleLogOut = () => {
        window.localStorage.clear();
        route.push('/auth/login')
    }

    const handleSubmit = () => {
        console.log(form)
    }
    return (
        <>
            <section className="container-fluid d-flex p-0">
                <div className={`${style['left-container']} d-flex flex-column`}>
                    <div className={`${style['top']} d-flex flex-column justify-content-center`}>
                        <h3>Profile</h3>
                    </div>
                    <div className={`${style['middle']} d-flex flex-column align-items-center`}>
                        <div className={`${style['profile-box']} d-flex flex-column justify-content-center px-4 align-items-center`}>
                            <div className={`${style['top']} d-flex justify-content-evenly align-items-center`}>
                                <div className="nav-user-border ms-4">
                                    <Image 
                                        className={`${style['profile-image']}`}
                                        src={user ? user.profile_picture !== null ? user.profile_picture : defaultPict : defaultPict}
                                        alt="Logo Image"
                                        height={70}
                                        width={70}
                                        layout='fixed'
                                    />
                                </div>
                                <div className={`${style['profile-details']} d-flex flex-column`}>
                                    <p>@{user && user.username}</p>
                                    <h2>{user && user.fullname}</h2>
                                    <h4>{user && user.role_name === 'member' ? 'Member' : 'Author'}</h4>
                                </div>
                            </div>
                            <div className={`${style['bottom']} d-flex flex-column justify-content-evenly`}>
                                <h2>About Me</h2>
                                <p>{user && user.job_description}</p>
                            </div>
                        </div>
                        <div className={`${style['profile-small-box']} d-flex justify-content-between`}>
                            <div className={`${style['list']} d-flex flex-column align-items-center`}>
                                <h2>52</h2>
                                <p>Post</p>
                            </div>
                            <div className={`${style['list']} d-flex flex-column align-items-center`}>
                                <h2>250</h2>
                                <p>Visitor</p>
                            </div>
                            <div className={`${style['list']} d-flex flex-column align-items-center`}>
                                <h2>4.5K</h2>
                                <p>Comment</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${style['bottom']} d-flex flex-column justify-content-center`}>
                        <div className={`${style['profile-menu']} d-flex w-100 px-5 align-items-center`}>
                            <li>Edit Profile</li>
                        </div>
                        <div className={`${style['profile-menu']} d-flex w-100 px-5 align-items-center`}>
                            <li>Saved Post</li>
                        </div>
                        <div className={`${style['profile-menu']} d-flex w-100 px-5 align-items-center`}>
                            <li>FAQ</li>
                        </div>
                        <div className={`${style['profile-menu']} d-flex w-100 px-5 align-items-center`}>
                            <li>Help</li>
                        </div>
                        <div className={`${style['profile-menu']} d-flex w-100 px-5 align-items-center`} onClick={handleLogOut}>
                            <li>Logout</li>
                        </div>
                    </div>
                </div>
                <div className={`${style['right-container']} d-flex flex-column`}>
                    <div className={`${style['top']} d-flex flex-column align-items-center justify-content-evenly`}>
                        <div className="nav-user-border ms-4"> 
                            <Image 
                                className={`${style['profile-image']}`}
                                src={user ? user.profile_picture !== null ? user.profile_picture : defaultPict : defaultPict}
                                alt="Logo Image"
                                height={120}
                                width={120}
                                layout='fixed'
                            />
                        </div>
                        <div className={`${style['upload-profile-picture']}`}>
                            <h2>Upload Profile Picture</h2>
                        </div>
                    </div>
                    <div className={`${style['middle']} d-flex justify-content-evenly align-items-start`}>
                        <div className="d-flex flex-column">
                            <Input 
                            labelClass={`${style['label-input']} mb-2`} 
                            label="Username :"
                            className={`${style['profile-input']}`}
                            placeholder={user && user.username}
                            onChange={handleForm}
                            value={form.username}
                            name="username"
                            type="text"
                            />
                            <Input 
                            labelClass={`${style['label-input']} mb-2`} 
                            label="Email :"
                            className={`${style['profile-input']}`}
                            placeholder={user && user.email}
                            onChange={handleForm}
                            value={form.email}
                            name="email"
                            type="email"
                            />
                            <Input 
                            labelClass={`${style['label-input']} mb-2`} 
                            label="Job Title :"
                            className={`${style['profile-input']}`}
                            placeholder={user && user.job_title}
                            onChange={handleForm}
                            value={form.job_title}
                            name="job_title"
                            type="text"
                            />
                        </div>
                        <div className="d-flex flex-column w-50">
                            <Input 
                            labelClass={`${style['label-input']} mb-2`} 
                            label="Name :"
                            className={`${style['profile-input']}`}
                            placeholder={user && user.fullname}
                            onChange={handleForm}
                            value={form.fullname}
                            name="fullname"
                            type="text"
                            />
                            <Input 
                            labelClass={`${style['label-input']} mb-2`} 
                            label="Password :"
                            className={`${style['profile-input']}`}
                            placeholder='user password'
                            onChange={handleForm}
                            value={form.password}
                            name="password"
                            type="password"
                            />
                            <label className={`${style['label-input']} mb-2`}>
                                About :
                            </label>
                            <textarea 
                            className={`${style['profile-input-desc']}`}
                            placeholder={user && user.job_description}
                            onChange={handleForm}
                            value={form.job_description}
                            name="job_description"
                            />
                        </div>
                    </div>
                    <div className={`${style['bottom']} d-flex flex-column align-items-center justify-content-evenly`}>
                        <Button
                            onClick={handleSubmit}
                            className={`${style['profile-button']}`}>
                            Save Changes
                        </Button>
                        <Button
                            className={`${style['profile-button']}`}>
                            Request to be an author
                        </Button>
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