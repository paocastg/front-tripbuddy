import styles from './index.module.scss'

const Button = ({ children, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick} ><strong>{children}</strong></button>
  )
}

export default Button
