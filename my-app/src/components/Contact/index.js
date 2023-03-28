import {useState,useEffect} from 'react'
import List from './List'
import Form from './Form'
import "./style.css"

function Contact() {
    const[contacts,setContacts]=useState([{
        fullname:"Mehmet",
        phone_number:123123
    },{
        fullname:"Ahmet",
        phone_number:456457
    }
])

    //useEffect(()=>{
      //  console.log(contacts)
    //},[contacts])
  return (
    <div id='container'>
        <h1>Contacts</h1> 
        <List contacts = {contacts} />
        <Form addContacts={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contact