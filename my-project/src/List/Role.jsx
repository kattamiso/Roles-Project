import HelpIcon from "../../Icons/HelpIcon"
import EditIcon from "../../Icons/EditIcon"
import DeleteIcon from "../../Icons/DeleteIcon";

const Role = () => {
  return (
    <div>
           <div className="flex gap-[120px] mt-8  border-b border-gray-200 pb-4">
            <h2>ადმინისტრატორი</h2>
            <div className="flex" >
            <h2>მართვის სრული უფლება, მართვის სრული უფლება</h2>
            <div className="flex justify-between pl-[15rem] gap-6 mt-1 cursor-pointer" > 
            <HelpIcon/>
            <EditIcon/>
            <DeleteIcon />
            </div>
         </div>
         </div>
    </div>
  )
}

export default Role