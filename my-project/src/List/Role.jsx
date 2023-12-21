import HelpIcon from "../../Icons/HelpIcon"
import EditIcon from "../../Icons/EditIcon"
import DeleteIcon from "../../Icons/DeleteIcon";
import { useState, useEffect } from 'react';

const Role = () => {
 const [items, setItems] = useState(null)


useEffect(() => {
  fetch('http://localhost:3000/data')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setItems(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}, []);

  return (
    <div>
    <div className="flex gap-[120px] mt-8  border-b border-gray-200 pb-4">
      {items && items.map((item, index) => (
        <div key={index} id={item.id} className="flex gap-28">
            <h1>{item.title}</h1>
            <h1>{item.description}</h1>
          <div>
          </div>
        </div>
        
      ))}
    <div className="flex justify-between pl-[15rem] gap-6 mt-1 cursor-pointer" > 
       <HelpIcon/>
      <EditIcon/>
       <button >
       <DeleteIcon />
       </button>
       </div>
    </div>
  </div>
)}

export default Role