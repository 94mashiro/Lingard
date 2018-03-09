import React from 'react'
import { Select } from 'antd'

const { Option } = Select

export default ({ defaultValue, onChange, engines }) => (
  <div style={{marginBottom: 10}}>
    <Select defaultValue={defaultValue} onChange={onChange}>
      {engines.map(engine => (<Option value={engine.value} key={engine.value}>{engine.name}</Option>))}
    </Select>
  </div>
)