import React, { Component } from 'react'

export default class index extends Component {
  Exit=()=>{
    this.props.history.push('/')
  }
  render() {
    console.log(this.props.match.params.uid)
    return (
      <div>
        这是手机端组件
        <button onClick={this.Exit}>退出</button>
      </div>
    )
  }
}
