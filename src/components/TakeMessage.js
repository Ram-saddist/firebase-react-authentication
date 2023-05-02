import React, { Component } from 'react'

export default class TakeMessage extends Component {
    state={
        newMessage:""
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    send=()=>{
        //console.log(this.state.newMessage)
        if(this.state.newMessage){
            this.props.onSubmit({
                newMessage:this.state.newMessage
            })
        }
        
        this.setState({
            newMessage:""
        })
    }
    render() {
    return (
      <div>
        <input 
            type="text" 
            name="newMessage"
            onChange={this.handleChange}
            value={this.state.newMessage}
            placeholder='Enter a messsage' />
        <button onClick={this.send}>Submit</button>
      </div>
    )
  }
}
