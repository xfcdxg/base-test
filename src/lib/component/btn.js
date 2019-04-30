import React from 'react'

export default (
  ({ style, children, onClick }) => (
    <div style={{
      width: '2.05rem',
      height: '.3rem',
      lineHeight: '.3rem',
      background: 'linear-gradient(141deg,rgba(241,66,66,1) 0%,rgba(245,133,133,1) 100%)',
      boxShadow: '0px 3px 5px 0px rgba(131,103,103,0.42)',
      borderRadius: '.14rem',
      fontSize: '.18rem',
      textAlign: 'center',
      marginLeft: 'calc(50% - 1.02rem)',
      marginTop: '.22rem',
      color: '#fff',
      fontWeight: '700',
      ...style
    }} onClick={ onClick }>
      { children }
    </div>
  )
)
