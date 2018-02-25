import React, { Component } from 'react'
import { Button } from 'antd'
import { withRouter } from 'react-router-dom'

export default withRouter(({history}) => (
  <Button size="small" icon="save" shape="circle" onClick={() => {history.push('/')}}></Button>
))