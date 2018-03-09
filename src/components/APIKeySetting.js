import React from 'react'
import { Input } from 'antd'

const { TextArea } = Input

export default ({ onChange, value }) => (
  <div style={{marginBottom: 10}}>
    <TextArea placeholder="自定义API KEY (当接口无法正常工作时填写)" autosize={{ minRows: 1, maxRows: 3 }} style={{ resize: 'none' }} value={ value } onChange={ onChange } />
  </div>
)