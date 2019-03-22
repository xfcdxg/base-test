const addVconsole = alwaysShow => {
  //始终存在
  if (alwaysShow) {
    const V = require('vconsole')
    const v = new V()
    console.log(v.test)
    return
  }
  // 添加vonsole的埋点， 5指点击可唤出
  let i = 0
  let vTimer = ''
  document.body.addEventListener('touchstart', e => {
    i++
    if (e.touches.length === 5 && i >= 5) {
      i = 0
      clearTimeout(vTimer)
      vTimer = ''
      if (document.querySelector('#__vconsole')) {
        document.querySelector('#__vconsole').remove()
      } else {
        const V = require('vconsole')
        const v = new V()
      }
    }
    if (vTimer) {
      setTimeout(() => {
        i = 0
        clearTimeout(vTimer)
        vTimer = ''
      }, 1000)
    }
  })
}

export default addVconsole