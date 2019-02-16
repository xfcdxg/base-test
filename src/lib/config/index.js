import { getStore } from 'mulan-lib'

export const gamePart = 3

export const domain = 'ttlcw.adleading.com'

export const apiDomain = 'openapi.adleading.com'

export const baseUrl = `//${ domain }`

export const baseApiUrl = `${ apiDomain }/fa`

export const appid = 'wxf933b5ae6494a07b'
// export const appid = 'wx307d043f09838876'
// 开发者ID(AppID)   wx307d043f09838876
// Appsecret 9e0fa93141192c03967bb2c4cca12fd2

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
