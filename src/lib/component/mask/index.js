import './style/index.css'
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { merge, compose } from 'ramda'

const MaskList = []

const Mask = (content, options) => {
    const body = document.body
    const node = document.createElement('div')

    const preventDefaul = e => e.preventDefault()
    const handleContainerClose = () => {
      if (unmountComponentAtNode(node)) node.remove()
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }

    MaskList.push(handleContainerClose)

    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'

    // 苹果部分手机，使用CitySearch组件时，可以左右滑动的问题。
    node.style.height = '100%'
    node.style.width = '100%'
    body.appendChild(node)

    render(
      <MaskContainer { ...{ handleContainerClose } } { ...options}>
        { React.cloneElement(content, { handleContainerClose }) }
      </MaskContainer>,
      node
    )
    return handleContainerClose
}

Mask.__proto__.closeAll = () => {
  if (MaskList.length > 0) {
    setTimeout(MaskList.shift(), 0)
    Mask.closeAll()
    window.location.hash = ''
  }
}

const localMaskContainerStyle = {}
const localMaskStyle = {}
const localContentStyle = {}
const defultMaskClick = () => {}

const bgWhite = { backgroundColor: '#000' }

// maskClick: 点击遮罩时触发的事件
// selfClass: 用户自定义容器的class名
const MaskContainer = ({ children, handleContainerClose, maskClick = defultMaskClick, mask = true, maskClosable = true, maskPosition = 'fixed', style = {}, maskStyle = {}, contentStyle, selfClass = '' }) =>
(
  <div className={ `mask-container ${ selfClass }` } style={ merge(localMaskContainerStyle, style) }>
    <div className='mask'
         ref={ node => node && setTimeout(() => { node.className += ' fade-in' }, 50) }
         onClick={ maskClosable ? compose(handleContainerClose, maskClick) : '' }
         onTouchMove={ e => e.preventDefault() }
         style={ !mask ? merge(localMaskStyle, maskStyle)
                       : compose(merge(localMaskStyle), merge(bgWhite))(maskStyle)
               } ></div>
    <div className='content' style={ merge(localContentStyle, contentStyle) }>
      { children }
    </div>
  </div>
)

export default Mask
