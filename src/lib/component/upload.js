import React from 'react'
import { processRequest } from 'lib'
import { get } from 'mulan-lib'

class Upload extends React.Component {
  constructor(props) {
    super(props)

    this.handleUploadClick = this.handleUploadClick.bind(this)
  }

  handleUploadClick() {
    const { wx, debug, onChange } = this.props
    const _t = this

    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
        console.log(localIds)

        wx.uploadImage({
          localId: localIds[0], // 需要上传的图片的本地ID，由chooseImage接口获得
          isShowProgressTips: 1, // 默认为1，显示进度提示
          success: function (res) {
            var serverId = res.serverId; // 返回图片的服务器端ID
            processRequest(
              get('/common/uploadWeixinPicture', { mediaId: serverId }),
              data => {
                const { fileKeyList, picBase } = data
                console.log('uploadend', data, `${ picBase }${ fileKeyList[0] || '' }`, fileKeyList[0])
                onChange({
                  imgUrl: `${ picBase }${ fileKeyList[0] || '' }`,
                  imgKey: fileKeyList[0],
                })
              }
            )

          }
        })
      }
    });
  }
  render() {
    const { style, children } = this.props
    return (
      <span style={{ ...style }} onClick={ this.handleUploadClick }>
        { children }
      </span>
    )
  }
}

export default Upload
