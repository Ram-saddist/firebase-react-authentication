import {useState,useEffect} from 'react'
import {db} from './firebaseConfig'

function Home(){
  const [list,setList]=useState([])
  useEffect(()=>{
    retrieve()
  },[])
  async function retrieve(){
    console.log("from home using useeffect")
    const dataRef=db.collection("time").orderBy("date","asc")
    const snapShot=await dataRef.get()
    console.log("snap data",snapShot)
    setList(snapShot.docs.map((doc)=>(
      {
        date:doc.data().date.toDate().toDateString(),
        message:doc.data().todoMsg
      }
    )))
  }

  return(

    <div>
      {console.log(list)}
    </div> 
  )
}
export default Home