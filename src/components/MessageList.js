import React, { Component } from 'react'
import TakeMessage from './TakeMessage'

export default class MessageList extends Component {
  state={
    messageList:[]
  }
  add=(currentMsg)=>{
    console.log(currentMsg)
    this.setState({
       messageList:[...this.state.messageList,currentMsg]
    })
  }
  render() {
    console.log(this.state.messageList)
    return (
      <div>
        <TakeMessage onSubmit={this.add}/>
      </div>
    )
  }
}
