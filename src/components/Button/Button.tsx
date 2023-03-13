import './Button.scss'

type ButtonProps = {
    label: string,
}

const Button = ({label}: ButtonProps) => {
    return (
        <div className='button-container'>
            <button>{label}</button>
        </div>
    )
}

export default Button;