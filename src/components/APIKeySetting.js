import React from 'react'
import { Input } from 'antd'

const { TextArea } = Input

export default ({ onChange, value }) => (
  <div style={{marginBottom: 10}}>
    <TextArea placeholder="接口API KEY" autosize={{ minRows: 1, maxRows: 3 }} style={{ resize: 'none' }} value={ value } onChange={ onChange } />
  </div>
)