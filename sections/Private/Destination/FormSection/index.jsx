import React from 'react'
import DropdownMenu from 'components/DropdownDestinos'
import SelectDestinos from 'components/SelectDestinos'
import { Form, DatePicker, Space, Tooltip, Button } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import SliderAlojamiento from 'components/SliderAlojamiento'

const { RangePicker } = DatePicker

const FormSection = () => {
  return (
    <div>
      <Form >
        <Form.Item >
          <SelectDestinos />
        </Form.Item>
        <Form.Item>
          <Space direction="horizontal">
          <RangePicker/>
          <DropdownMenu/>
        </Space>
        </Form.Item>
        <Form.Item>
          <Space direction="horizontal">
            <h1>Te gustaria incluir alojamiento</h1>
            <Tooltip title="Extra information">
              <QuestionCircleOutlined/>
            </Tooltip>
          </Space>
          <br/>
          <Space>
            <Button size="large"> Quiero un Hotel</Button>
            <Button size="large">Consigueme un Airbnb</Button>
            <Button size="large">No, gracias</Button>
          </Space>
        </Form.Item>
        <Form.Item>
          <SliderAlojamiento/>
        </Form.Item>
        <br/><br/>
        <Form.Item>
        <Space>
            <Button size="large"> Atrás </Button>
            <Button size="large">Siguiente</Button>
          </Space>
        </Form.Item>

      </Form>
    </div>
  )
}

export default FormSection
