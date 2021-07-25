import { Tooltip } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import styles from './index.module.scss'

const CustomTooltip = ({ text, title }) => {
  return (
    <div>
      <p className={styles.par} >
        <b style={{ marginRight: '5px' }} >{text}</b>
        <Tooltip title={title}>
          <QuestionCircleOutlined/>
        </Tooltip>
      </p>
    </div>
  )
}

export default CustomTooltip
