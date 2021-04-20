import React, { Component } from 'react'

export default class Group extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        这是分类组件
      </div>
    )
  }
}
