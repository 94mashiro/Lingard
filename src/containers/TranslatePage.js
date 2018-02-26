import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Input, Button } from 'antd'
import * as TranslateActions from '../actions/translate'

import LanguageSelector from '../components/LanguageSelector'
import TranslateCode from '../config/translate_code.json'
  
import './TranslatePage.css'

class TranslatePage extends Component {
  constructor(props) {
    super(props)
    this.handleOriginalTextareaChange = this.handleOriginalTextareaChange.bind(this)
    this.handleTranslateButtonPress = this.handleTranslateButtonPress.bind(this)
  }

  handleOriginalTextareaChange = (e) => {
    this.props.setOriginalText(e.target.value)
  }

  handleTranslateButtonPress = () => {
    this.props.fetchTranslationApi()
  }

  handleTranslationLanguageChange = (language) => {
    this.props.setTranslationLanguage(language)
  }

  render() {
    const { TextArea } = Input
    const { originalText, translationText, translateEngine, translationLanguage } = this.props
    return (
      <div className="translate-page-container">  
        <TextArea rows="6" value={originalText} onChange={this.handleOriginalTextareaChange} />
        <div className="translate-page-toolbar">
          <LanguageSelector languages={TranslateCode[translateEngine]} onChange={this.handleTranslationLanguageChange} defaultValue={translationLanguage}/>
          <Button type="primary" icon="search" className="translate-button" onClick={this.handleTranslateButtonPress}>Translate</Button>
        </div>
        <TextArea rows="6" value={translationText} readOnly />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    originalText: state.translate.original_text,
    translationText: state.translate.translation_text,
    translateEngine: state.setting.translate_engine,
    translationLanguage: state.translate.translation_language
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(TranslateActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TranslatePage)