import React from 'react'
import { Select } from 'antd'

const { Option } = Select

export default ({ defaultValue, onChange, languages }) => (
  <div>
    <Select defaultValue={defaultValue} onChange={onChange} style={{ width: 150 }}>
      {Object.keys(languages).map(key => (<Option key={languages[key]} value={languages[key]}>{key}</Option>))}
    </Select>
  </div>
)