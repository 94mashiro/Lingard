import React, { Component } from 'react'
import Routes from '../routes'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import { Layout, Row, Col } from 'antd'

import Nav from './Nav'
import './App.css'

export default class App extends Component {
  render() {
    const { Header, Content } = Layout
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
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

