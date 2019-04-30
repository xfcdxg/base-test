import React from 'react'

const RightArrow = ({ borderColor = '#fff', style }) => {
  return (
    <span style={{
      display: 'inline-block',
      height: '.08rem',
      width: '.08rem',
      transform: 'rotate(-45deg)',
      borderRight: '2px solid',
      borderBottom: '2px solid',
      marginRight: '.01rem',
      borderColor,
      ...style
    }} />
  )
}
export default RightArrow
