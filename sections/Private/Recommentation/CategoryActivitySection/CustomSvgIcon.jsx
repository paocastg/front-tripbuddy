import React, { useState } from 'react'
import styles from './index.module.scss'
import Icon from '@ant-design/icons'

const CustomSvgIcon = ({ svg, AddCategoryAndActivitySelected, el }) => {
  const [selected, setSelected] = useState(false)
  // console.log(el.nombre_categoria)
  // console.log(el.nombre_actividad)
  const CustomIcon = props => <Icon component={svg} {...props} />

  const handleIconClick = (e) => {
    // AddCategoryAndActivitySelected(name)
    setSelected(prev => !prev)
  }

  return (
    <div className={!selected ? styles.customSvgIcon : styles.selectedSvgIcon} onClick={handleIconClick} >
      <CustomIcon style={{ fontSize: '50px', color: '#000' }}/>
      <span>{name}</span>
    </div>
  )
}

export default CustomSvgIcon
