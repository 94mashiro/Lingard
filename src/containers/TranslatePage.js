import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Input, Button } from 'antd'
import * as TranslateActions from '../actions/translate'
  
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

  render() {
    const { TextArea } = Input
    const { originalText, translationText } = this.props
    return (
      <div className="translate-page-container">  
        <TextArea autosize={{ minRows: 1 }} value={originalText} onChange={this.handleOriginalTextareaChange} />
        <Button type="primary" icon="search" className="translate-button" onClick={this.handleTranslateButtonPress}>Tranlate</Button>
        <TextArea autosize={{ minRows: 1 }} value={translationText} readOnly />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    originalText: state.translate.original_text,
    translationText: state.translate.translation_text
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(TranslateActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TranslatePage)