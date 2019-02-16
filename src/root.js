import React, { Component } from 'react'

class Root extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {}

  render() {
    const { children } = this.props
    return (
      <div className='root'
      style={{
        width: "100%",
        height: "100%",
      }}>
      { children }
      </div>
    )
  }
}

export default Root
