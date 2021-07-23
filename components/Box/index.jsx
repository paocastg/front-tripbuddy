import styles from './index.module.scss'

const Box = ({ onClick, img, text }) => {
  return (
    <div className={styles.boxDestination} onClick={onClick} >
        <img className={styles.img} src={img} alt={text} />
        <p className={styles.text} >{text}</p>
    </div>
  )
}

export default Box
