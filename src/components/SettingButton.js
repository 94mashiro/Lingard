import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'antd'

export default withRouter(({history}) => (
  <Button size="small" icon="setting" shape="circle" onClick={() => {history.push('/setting')}}></Button>
))