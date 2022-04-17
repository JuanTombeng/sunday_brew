import Image from 'next/image'
import saveItem from '../../public/saveItem.svg'
import * as timeago from 'timeago.js';
import moment from 'moment';


const ArticleCard = ({image, title, subtitle, like, time, saved}) => {
    return (
        <div className="article-card d-flex flex-column m-2">
            <div className="upper-card-area d-flex h-50">
                <Image 
                    className='img-fluid article-card-image'
                    src={image}
                    alt="Logo Image"
                    width={400}
                    height={250}
                />
            </div>
            <div className="lower-card-area d-flex flex-column h-75 py-3 justify-content-between">
                <div className="d-flex flex-column h-75 mb-2" style={{borderBottom : '1px solid #11468F'}}>
                    <h4 className="article-card-title d-flex justify-content-center">
                        {title ? title : "Donald Trump Speech"}
                    </h4>
                </div>
                <div className="d-flex justify-content-between h-25">
                    <div className="d-flex flex-column">
                        <p className="article-card-text d-flex mb-2">
                            {like} likes
                        </p>
                        <p className="article-card-text d-flex" dateTime={time}>
                            {time}
                        </p>
                    </div>
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