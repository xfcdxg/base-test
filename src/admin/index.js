import React from 'react'
import { browserHistory } from 'react-router'
import { getStore } from 'mulan-lib'

class Admin extends React.Component {
  constructor(props) {
    super(props)

    const { adminKey } = getStore('admininfo', 'session') || {}

    if (!adminKey) browserHistory.push('/admin/login')

    this.state = {
      adminKey
    }
  }

  componentDidMount() {}

  render() {

    return (
      <div>Im admin</div>
    )
  }
}

export default Admin
