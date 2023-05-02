import React, { Component } from 'react'
import app from './firebaseConfig'
import {getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword} from 'firebase/auth'

const auth=getAuth()
class Login extends Component {
  state={
    username:"",
    password:""
  }
  handleChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
  }
  register=()=>{
    createUserWithEmailAndPassword(auth,this.state.username,this.state.password)
        .then((userCredentials)=>{
            console.log("created user successfully",userCredentials)
        })
        .catch((err)=>{
            console.log(err)
        })
  } 
  signIn=()=>{
    signInWithEmailAndPassword(auth,this.state.username,this.state.password)
        .then((userCredentials)=>{
            console.log("Logged in Successfully",userCredentials)
        })
        .catch((err)=>{
            alert("Invaid user")
            console.log(err)
        })
  }
  render() {
    return (
      <div>
        <p><input 
            name="username" 
            onChange={this.handleChange} 
            placeholder='Username'/></p>
        <p><input
            name="password"
            onChange={this.handleChange}
            placeholder='Password'/></p>
        <button onClick={this.signIn}>Login</button>
        <p>
            <span>Don't have an account??</span>
            <button onClick={this.register}>SignUp</button>Here
        </p>
      </div>
    )
  }
}
export default Login