import React from 'react'

let inFocus = false
let errorMessage = ''

export const iptFocus = () => {
  console.log('im focus')
  errorMessage = '';
  inFocus = true;
}

export const iptBlur = () => {
  console.log('im blur')
  inFocus = false;
  setTimeout(function () {
    if(inFocus == false){
      // 当input 失焦时,滚动一下页面就可以使页面恢复正常
      checkWxScroll();
    }
  },200)
}

const temporaryRepair = () => {
   var currentPosition,timer;
   var speed=1;//页面滚动距离
   timer = setInterval(function(){
      currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
      currentPosition -= speed;
      window.scrollTo(0, 0);//页面向上滚动
      clearInterval(timer);
   }, 1);
}
const checkWxScroll = () => {
   var ua = navigator.userAgent.toLowerCase();
   var u = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

   if(ua.match(/MicroMessenger/i) == 'micromessenger'&&!!u){ //在iphone 微信中
    temporaryRepair();
   }
}

class TextInput extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { type = 'text', value = '', style = {}, onChange = e => e.preventDefault(), placeholder, maxLength = 999999, disable } = this.props
    return (
      <input onBlur={ iptBlur } onFocus={ iptFocus } type={ type } value={ value } disable={ disable } style={ style } maxLength={ maxLength } onChange={ onChange } placeholder={ placeholder } />
    )
  }
}

export default TextInput
