import React, { Component } from 'react'
import TranslatePage from './TranslatePage'
import Routes from '../routes'
import { ConnectedRouter } from 'react-router-redux'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { Layout, Row, Col } from 'antd'

import Nav from './Nav'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { Header, Content } = Layout
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
        <div className="App">
          <Header>
            <Nav />
          </Header>
          <Content>
            <Row>
              <Col span={22} offset={1}>  
                <Routes /> 
              </Col>
            </Row>
          </Content>
        </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

