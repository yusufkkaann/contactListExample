import React,{useState} from 'react'
import  {useUse}  from '../context/UserContext'

function Profiles() {
    const {user,setUser} = useUse();
    const [loading,setLoading] = useState(false)
    const handleLogin = ()=> {
        setLoading(true)
        setTimeout(()=>{
            setUser( {id: 1 , name:"kaan" , age:23 } )
            setLoading(false)
        },2000)
    }
    
  return (
    <div>
        <code>{JSON.stringify(user)}</code>
        {
         !user && <button onClick={handleLogin}>{loading ? "Loading.." : "Login"}</button> }
         <br />
            {user && <button onClick={()=>setUser(null)}>Logout</button>}
       

    </div>
  )
}

export default Profiles