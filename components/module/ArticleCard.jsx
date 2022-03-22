import Image from 'next/image'
import saveItem from '../../public/saveItem.svg'
import * as timeago from 'timeago.js';
import moment from 'moment';


const ArticleCard = ({image, title, subtitle, like, time, saved}) => {
    return (
        <div className="article-card d-flex flex-column me-5">
            <div className="upper-card-area d-flex">
                <Image 
                    className='img-fluid article-card-image'
                    src={image}
                    alt="Logo Image"
                    width={260}
                    height={150}
                />
            </div>
            <div className="lower-card-area d-flex flex-column h-100 justify-content-evenly px-3">
                <h4 className="article-card-title d-flex justify-content-center">
                    {title ? title : "Donald Trump Speech"}
                </h4>
                <p className="article-card-subtitle d-flex justify-content-center">
                    {/* {subtitle ? subtitle : "Why corona never ends? Let’s see how its facts"} */}
                    {subtitle ? subtitle.substr(0, 30) : "Why corona never ends? Let’s see how its facts"}
                </p>
                <div className="d-flex justify-content-center">
                    <p className="article-card-text d-flex">
                        {like ? like : "2.1K"}
                    </p>
                    <p className="article-card-text d-flex mx-4" datetime={time}>
                        {time ? timeago.format(Date.now() - time) : "3m ago"}
                        {/* {time ? timeago.format(Date.now() - (moment(time).format('DD MMM, YYYY'))) : "recently"} */}
                    </p>
                    <Image 
                        className='img-fluid article-card-icon'
                        src={saveItem}
                        alt="Logo Image"
                    />
                </div>
            </div>
        </div>
    )
}

export default ArticleCard