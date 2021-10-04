const TimeLineSection = ({ items }) => {
  const generateSpaces = (space) => {
    if (space === undefined || space === null) return
    const spaceArray = []
    for (let i = 0; i < parseInt(space); i++) {
      spaceArray.push(
        <div key={i} data-testid='space'></div>
      )
    }
    return spaceArray
  }
  return (
    <div>
      <ul data-testid="list-destiny">
        {items &&
          items.map((el) => (
            <li key={el.id} data-testid="destiny">
              <span>1</span><b>Lima </b> - 2 días
              {generateSpaces(parseInt(el.days))}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default TimeLineSection
