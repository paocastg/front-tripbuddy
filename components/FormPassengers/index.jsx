import React, { useContext, useState } from 'react'
import { Menu, Button, Dropdown, Space, Form } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
import SelectTripContext from 'context/SelectTripContext'
import { TYPES } from 'actions/quotationActions'

const FormPassengers = () => {
  const [state, setState] = useState('')
  const { state: stateContext, dispatch } = useContext(SelectTripContext)

  const handleVisibleChange = (flag) => {
    setState({ visible: flag })
  }

  const handleClick1 = () => {
    if (stateContext.numero_adultos > 0) {
      dispatch({
        type: TYPES.UPDATE_ONE_QUOTATION,
        payload: {
          field: 'numero_adultos',
          data: stateContext.numero_adultos - 1,
          manyOptions: false
        }
      })
    }
  }
  const handleClick2 = () => {
    dispatch({
      type: TYPES.UPDATE_ONE_QUOTATION,
      payload: {
        field: 'numero_adultos',
        data: stateContext.numero_adultos + 1,
        manyOptions: false
      }
    })
  }
  const handleClick3 = () => {
    if (stateContext.numero_adolescentes > 0) {
      dispatch({
        type: TYPES.UPDATE_ONE_QUOTATION,
        payload: {
          field: 'numero_adolescentes',
          data: stateContext.numero_adolescentes - 1,
          manyOptions: false
        }
      })
    }
  }
  const handleClick4 = () => {
    dispatch({
      type: TYPES.UPDATE_ONE_QUOTATION,
      payload: {
        field: 'numero_adolescentes',
        data: stateContext.numero_adolescentes + 1,
        manyOptions: false
      }
    })
  }
  const handleClick5 = () => {
    if (stateContext.numero_ninos > 0) {
      dispatch({
        type: TYPES.UPDATE_ONE_QUOTATION,
        payload: {
          field: 'numero_ninos',
          data: stateContext.numero_ninos - 1,
          manyOptions: false
        }
      })
    }
  }
  const handleClick6 = () => {
    dispatch({
      type: TYPES.UPDATE_ONE_QUOTATION,
      payload: {
        field: 'numero_ninos',
        data: stateContext.numero_ninos + 1,
        manyOptions: false
      }
    })
  }

  const menu = () => {
    return (
      <div>
        <Menu>
          <Menu.Item key="1">
            <div className={styles.dropdownCenter}>
              <span>Adultos</span>
              <Space>
                <Button type="text" onClick={handleClick1}>
                  -
                </Button>
                {stateContext.numero_adultos}
                <Button type="text" onClick={handleClick2}>
                  +
                </Button>
              </Space>
            </div>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="2">
            <div className={styles.dropdownCenter}>
              <span>Adolescentes</span>
              <Space>
                <Button type="text" onClick={handleClick3}>
                  -
                </Button>
                {stateContext.numero_adolescentes}
                <Button type="text" onClick={handleClick4}>
                  +
                </Button>
              </Space>
            </div>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="3">
            <div className={styles.dropdownCenter}>
              <span>Niños</span>
              <Space>
                <Button type="text" onClick={handleClick5}>
                  -
                </Button>
                {stateContext.numero_ninos}
                <Button type="text" onClick={handleClick6}>
                  +
                </Button>
              </Space>
            </div>
          </Menu.Item>
        </Menu>
      </div>
    )
  }

  return (
    <Form.Item>
      <Dropdown.Button
        className={styles.dropdown}
        overlay={menu}
        onVisibleChange={handleVisibleChange}
        visible={state.visible}
        trigger={['click']}
        icon={<DownOutlined />}
        size="large"
      >
        {<UserOutlined />}{' '}
        {stateContext.numero_adolescentes +
          stateContext.numero_adultos +
          stateContext.numero_ninos}{' '}
        Personas &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Dropdown.Button>
    </Form.Item>
  )
}

export default FormPassengers
