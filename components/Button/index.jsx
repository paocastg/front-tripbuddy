import styles from './index.module.scss'

const Button = ({ children, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick} >{children}</button>
  )
}

export default Button
