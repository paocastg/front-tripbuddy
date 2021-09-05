import React from 'react'
import { Tag } from 'antd'
import styles from './index.module.scss'

const CustomTag = ({ el, handleDeleteTag, field }) => {
  const { name } = el
  return (
    <div className={styles.box} >
      <Tag className={styles.tag} closable onClose={(e) => handleDeleteTag(e, el, field)}>
        {name}
      </Tag>
    </div>
  )
}

export default CustomTag
