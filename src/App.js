//import MessageList from './components/MessageList';
import React, { Component } from 'react'
import './App.css';
import Home from './container/Home'
import Login from './container/Login'
import Logout from './container/Logout'
import Navbar from './container/Navbar'
import Todo from './container/Todo'
import NotFound from './container/NotFound'
import app from './container/firebaseConfig'
import {getAuth,onAuthStateChanged} from 'firebase/auth'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Frag from './Frag'
const auth=getAuth()

export default class App extends Component {
  state={
    user:{}
  }
  componentDidMount(){
    onAuthStateChanged(auth,(user)=>{
      if(user){
        this.setState({user:user})
      }
      else{
        this.setState({user:null})
      }
    })
  }
  render() {
    console.log("user details",this.state.user)
    return (
      <div>
        {
          this.state.user?(
             <BrowserRouter>
              <Navbar/>
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/logout" element={<Logout/>}/>
                  <Route path="/todo" element={<Todo/>}/>
                  <Route path="*" element={<NotFound/>}/>
                </Routes>
             </BrowserRouter> 
          ):<Login/>
        }
      </div>
    )
  }
}








// function App() {
//   return (
//     <div className="App">
//       {/* <MessageList/> */}
//     </div>
//   );
// }

//export default App;
