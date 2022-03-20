const Input = ({labelClass, label, ...props}) => {
    return (
        <>
            <label className={labelClass}>{label}</label>
            <input {...props} />
        </>
    )
}

export default Input