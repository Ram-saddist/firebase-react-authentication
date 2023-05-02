import React, { Component } from 'react'
// eslint-disable-next-line
import {db} from './firebaseConfig'
import firebase from 'firebase/compat/app'
export default class Todo extends Component {
    constructor(){
    	super()
    	this.state={
	        varient:""
	    }
	    this.send=this.send.bind(this)
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value,
            
        })
    }
    async send(){
        // eslint-disable-next-line
        //console.log("backend")
        // eslint-disable-next-line 
        let newDate=firebase.firestore.Timestamp.now()
        console.log("time",firebase.firestore.Timestamp.now())
        const response=await  db.collection("time").add({
            date:newDate,
            todoMsg:this.state.varient
        })
        console.log(response)
        // eslint-disable-next-line
        this .setState({
            varient:""
        })
        
    }
  render() {
    return (
      <div>
        <p><input  name="varient" onChange={this.handleChange} placeholder='Enter your details' /></p>
        <p><button onClick={this.send} >Send</button></p>
      </div>
    )
  }
}
