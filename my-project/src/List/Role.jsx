import HelpIcon from "../../Icons/HelpIcon"
import EditIcon from "../../Icons/EditIcon"
import DeleteIcon from "../../Icons/DeleteIcon";
import { useEffect } from "react";
import { useState } from "react";


const Role = () => {
 const [items, setItems] = useState(null)

// const handleDelete = (id) => {
//   const newItem = data.filter(data => data.id !== id);
//   setItems(newItem)
// }

  useEffect(() => {
    fetch('http://localhost:3000/data')
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
      setItems(data)
    })
  }, []);

  return (
    <div>
           <div className="flex gap-[120px] mt-8  border-b border-gray-200 pb-4">
            <h2>ადმინისტრატორი</h2>
            <div className="flex" >
            <h2>მართვის სრული უფლება, მართვის სრული უფლება</h2>
            <div className="flex justify-between pl-[15rem] gap-6 mt-1 cursor-pointer" > 
            <HelpIcon/>
            <EditIcon/>
            <button >
            <DeleteIcon />
            </button>
            </div>
         </div>
         </div>
    </div>
  )
}

export default Role