import React from 'react'
import { Flex } from 'antd-mobile'

export default (
  ({ pic, src, handleContainerClose, onClose, maxWidth = '90%', suffix='png', style = {} }) => (
    <Flex style={{ position: 'absolute', zIndex: '99', height: '100%', width: '100%' }} justify='center' align='center'
          onClick={ () => {
            onClose && onClose()
            handleContainerClose()
          }}
    >
     <img src={ src ? src : require(`img/${ pic }.${ suffix }`) } style={{ maxWidth, ...style }} />
    </Flex>
  )
)
