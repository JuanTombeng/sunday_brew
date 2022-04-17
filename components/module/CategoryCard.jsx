import Image from 'next/image'
import Link from "next/link";

const CategoryCard = ({image, title, description}) => {
    return (
        <Link href={`main/articles/${title.toLowerCase()}`} passHref>
            <div className="category-card d-flex flex-column mx-2">
                <Image 
                    className='img-fluid category-card-image'
                    src={image}
                    alt="Logo Image"
                    width={400}
                    height={250}
                />
                <h4 className="category-card-title d-flex justify-content-center mt-4">
                    {title ? title : "Government"}
                </h4>
                <p>{description}</p>
            </div>
        </Link>
    )
}

export default CategoryCard