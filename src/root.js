import React, { Component } from 'react'
import addVconsole from "utils/addvconsole";

class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    addVconsole(); //唤起控制台
  }

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
