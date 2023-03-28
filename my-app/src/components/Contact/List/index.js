import { useState } from 'react'

function List({ contacts }) {
  const [filteredName, setFilteredName] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filteredName.toLocaleLowerCase())

    )
  })
  console.log(filtered)


  return (
    <div >
      <div>
        <input placeholder='Filtered Name' value={filteredName} onChange={(e) => setFilteredName(e.target.value)} />
      </div>
      <ul className='list'>
        {
          filtered.map((contact, i) =>
            <li key={i}><span>{contact.fullname}
            </span>
              <span>
                {contact.phone_number} </span></li>
          )
        }
      </ul>
      <p>Total contacts ({filtered.length})</p>
    </div>
  )
}

export default List