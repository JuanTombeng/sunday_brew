import Image from 'next/image'
import saveItem from '../../public/saveItem.svg'
import Button from '../base/Button'

const LatestCard = ({image, title, author, subtitle, like, time, saved, buttonClass}) => {
    return (
        <div className="latest-card d-flex me-5 w-100">
            <div className="d-flex w-25">
                <Image 
                    className='img-fluid latest-card-image'
                    src={image}
                    alt="Logo Image"
                    width={260}
                    height={150}
                />
            </div>
            <div className="d-flex flex-column w-25 justify-content-between">
                <h4 className="latest-card-title d-flex justify-content-center ">
                    {title ? title : "Donald Trump Speech"}
                </h4>
                <p className="latest-card-subtitle d-flex justify-content-center">
                    {subtitle ? subtitle : "Why corona never ends? Let’s see how its facts"}
                </p>
                <p className="latest-card-subtitle-author d-flex justify-content-center">
                    {author ? author : "Writted by Ryann Jenn"}
                </p>
                <div className="d-flex justify-content-center">
                    <p className="latest-card-text d-flex">
                        {like ? like : "2.1K"}
                    </p>
                    <p className="latest-card-text d-flex mx-4">
                        {time ? time : "3m ago"}
                    </p>
                    <Image 
                        className='img-fluid latest-card-icon'
                        src={saveItem}
                        alt="Logo Image"
                    />
                </div>
            </div>
            <div className="d-flex w-50 justify-content-end align-items-center">
                <Button 
                    className="latest-card-button"
                    children="Start Exploring"
                />
            </div>
        </div>
    )
}

export default LatestCard