import styles from './styles.module.css'


const Input = ({
    type = 'text',
    name = '',
    className = '',
    placeholder = '',
    value,
    onChange = () => null,
    pattern
}) => {

    return (
        <div className={ `${styles.container} ${className}`}>
            <input 
                type={ type }
                name={ name }
                value={value}
                pattern={pattern}
                placeholder={ placeholder }
                onChange={ onChange }
                className={`${styles.input} ${className}`}
            />
        </div>
    )
}

export default Input;
  