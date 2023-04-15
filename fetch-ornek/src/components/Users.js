import { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

 
  useEffect(()=>{
    async function getData(){
        const res = await axios("https://jsonplaceholder.typicode.com/users")
        setUsers(res.data)
        setIsLoading(false)
    }
    getData()
  })

  return (
    <div>
      <h2>Users</h2>
      {isLoading && <div>Loading...</div>}
      
       
          {users.map((user) => (
            <div key={user.id}>{user.name}</div>
          ))}
     
      
    </div>
  );
}
 export default Users