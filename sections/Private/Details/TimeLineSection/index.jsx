
import styles from './index.module.scss'
const TimeLineSection = ({ items }) => {
  const generateSpaces = (space) => {
    if (space === undefined || space === null) return
    const spaceArray = []
    for (let i = 0; i < parseInt(space); i++) {
      spaceArray.push(
        <div key={i} data-testid='space'><br /></div>
      )
    }
    return spaceArray
  }
  return (
    <ul data-testid="list-destiny" className={styles.destinations}>
      {items &&
        items.map((el, index) => (
          <li key={index} data-testid="destiny" className={styles.destinations__item}>
            <p className={styles.destinations__text}>
              <span className={styles.destinations__circle}>{index + 1}</span>
              <b>{el.destino}</b> - {el.num_dias} días
            </p>
            {generateSpaces(parseInt(el.num_dias))}
          </li>
        ))}
    </ul>
  )
}

export default TimeLineSection
