import React, { Component } from 'react'
import { connect } from 'react-redux'
import SettingButton from '../components/SettingButton'
import TranslateButton from '../components/TranslateButton'
import { Row, Col } from 'antd'

import './Nav.css'
class Nav extends Component {
  constructor(props) {
    super(props)
  }

  renderNavButton() {
    let button = null
    if (this.props.location && this.props.location.pathname === '/setting') {
      button = <TranslateButton />
    } else {
      button = <SettingButton />
    }
    return button
  }

  render() {
    return (
      <div className="nav-container">
        {this.renderNavButton()} 
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.routing.location
  }
}

export default connect(mapStateToProps)(Nav)