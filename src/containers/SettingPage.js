import React, { Component } from 'react'
import EngineSelector from '../components/EngineSelector'
import APIKeySetting from '../components/APIKeySetting'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as SettingActions from '../actions/setting'
import * as TranslateActions from '../actions/translate'
import engines from '../config/engine.json'


class SettingPage extends Component {
  reinitTranslationLanguage = (engine) => {
    switch (engine) {
      case 'google':
        this.props.setTranslationLanguage('zh-CN')
        break
      case 'baidu':
        this.props.setTranslationLanguage('zh')
        break
      default:
        break
    }
  }
  handleEngineChange = (value) => {
    this.props.setTranslateEngine(value)
    this.reinitTranslationLanguage(value)
  }
  handleAPIKeyChange = (e) => {
    this.props.setEngineAPIKey(e.target.value)
  }
  render() {
    const { translate_engine, api_key } = this.props
    return (
      <div>
        <h1> 设置 </h1>
        <hr/>
        <div style={{ paddingTop: 10 }}>
          <EngineSelector engines={engines} onChange={this.handleEngineChange} defaultValue={translate_engine} />
          <APIKeySetting onChange={this.handleAPIKeyChange} value={api_key} />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...SettingActions, ...TranslateActions}, dispatch)
}

const mapStateToProps = (state) => {
  return {
    translate_engine: state.setting.translate_engine,
    api_key: state.setting.api_key
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingPage)