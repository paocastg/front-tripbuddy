import styles from './index.module.scss'

const H2 = ({ children }) => {
  return (
    <h2 className={styles.general}>{children}</h2>
  )
}

export default H2
