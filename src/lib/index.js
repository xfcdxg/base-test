import { Toast } from 'antd-mobile'

export const timeout = 10 // 分钟，10分钟超时

export const processRequest = (promise, success, fail) => {
  promise.then(({ code, data, msg }) => {
    if(code === '9999') {
      success && success(data)
    } else {
      if (fail && typeof fail === 'function') {
        fail(msg)
      } else {
        Toast.info(msg)
      }
    }
  })
}

export const setShare = props => {
  const { link = '', content, title } = props

  setTimeout(() => {
    const shareInfo = {
      content: content,
      title: title,
      url  : link,
      icon : '',
      cb   : function() {}
    }
    if(window._wx) {
      window._wx.init(shareInfo)
    }
    console.log('set share success')
  }, 500)
}
