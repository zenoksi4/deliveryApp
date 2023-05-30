import styles from './styles.module.css'


const Input = ({
    type = 'text',
    name = '',
    className = '',
    placeholder = '',
    onChange = () => null,
    error = ''
}) => {

    return (
        <div className={ `${styles.container} ${className}`}>
            <input 
                type={ type }
                name={ name }
                placeholder={ placeholder }
                onChange={ onChange }
                className={`${styles.input} ${className}`}
            />

            { error && <span className={ styles.error }>{ error }</span>}
        </div>
    )
}

export default Input;
  