import Image from 'next/image'

const CategoryCard = ({image, title}) => {
    return (
        <div className="category-card d-flex flex-column me-5 mb-2">
            <Image 
                className='img-fluid category-card-image'
                src={image}
                alt="Logo Image"
                width={200}
                height={200}
            />
            <h4 className="category-card-title d-flex justify-content-center mt-2">
                {title ? title : "Government"}
            </h4>
        </div>
    )
}

export default CategoryCard