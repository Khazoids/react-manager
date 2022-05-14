const Button = ({text, onClick}) => {

    return (
        <button type='button' className='btn' onClick={onClick}>
            <p>{text}</p>
        </button>
    )
}

export default Button