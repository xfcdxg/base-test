import React from 'react'
import { Toast } from 'antd-mobile'
import { get } from 'mulan-lib'
import { processRequest } from 'lib'

class SmsCode extends React.Component {
  constructor(props) {
    super(props)

    this.defaultText = '发送验证码'
    this.interval = 60

    this.state = {
      text: this.defaultText,
      canClick: this.props.canSmsClick || true,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  setText(text) {
    this.setState({
      text
    })
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  handleClick() {
    const { canClick } = this.state
    const { phone, handleSetCode, debug } = this.props

    if (!phone || phone.length < 11) {
      Toast.info('请输入正确的手机号')
      return
    }

    if (!canClick) return

    this.setState({ canClick: false })
    this.timer = setInterval(() => {
      if (this.interval === 1) {
        clearInterval(this.timer)
        this.interval = 60
        this.setState({
          canClick: true,
          text: this.defaultText
        })
      } else {
        this.setState({ text: --this.interval })
      }
    }, 1000)
    const postData = {
      mobile: phone
    }
    if (debug && debug == 1) {
      postData.isDebug = 'zq'
    }
    // console.log(postData, debug)
    processRequest(
      get('/api/common/sendMsg', postData),
      data => {
        if (data) {
          handleSetCode && handleSetCode(data)
        }
        this.setState({ text: this.interval })
      },
      err => {
        Toast.fail('发送失败，请稍后再试')
      }
    )
  }
  render() {
    const { style } = this.props

    const { text, canClick } = this.state

    return (
      <div onClick={ this.handleClick } style={{
        width: '.95rem',
        height: '.35rem',
        border: '1px solid #E94F19',
        color: 'rgb(233, 79, 25)',
        fontSize: '.15rem',
        lineHeight: '.35rem',
        borderRadius: '.04rem',
        opacity: canClick ? '1' : '.6',
        ...style
      }}>{ text }</div>
    )
  }
}

export default SmsCode
