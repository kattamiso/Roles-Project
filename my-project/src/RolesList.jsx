import { useState } from "react";
const Help = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M9 4.5C9.495 4.5 9.9 4.905 9.9 5.4V9C9.9 9.495 9.495 9.9 9 9.9C8.505 9.9 8.1 9.495 8.1 9V5.4C8.1 4.905 8.505 4.5 9 4.5ZM8.991 0C4.023 0 0 4.032 0 9C0 13.968 4.023 18 8.991 18C13.968 18 18 13.968 18 9C18 4.032 13.968 0 8.991 0ZM9 16.2C5.022 16.2 1.8 12.978 1.8 9C1.8 5.022 5.022 1.8 9 1.8C12.978 1.8 16.2 5.022 16.2 9C16.2 12.978 12.978 16.2 9 16.2ZM9.9 13.5H8.1V11.7H9.9V13.5Z" fill="#323232"/>
</svg>
)

const Edit = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M-0.00111389 12.6667V16H3.33222L13.1633 6.16889L9.83 2.83556L-0.00111389 12.6667ZM2.59444 14.2222H1.77666V13.4044L9.83 5.35111L10.6478 6.16889L2.59444 14.2222ZM15.7411 2.33778L13.6611 0.257778C13.4833 0.08 13.2611 0 13.03 0C12.7989 0 12.5767 0.0888889 12.4078 0.257778L10.7811 1.88444L14.1144 5.21778L15.7411 3.59111C16.0878 3.24444 16.0878 2.68444 15.7411 2.33778Z" fill="#323232"/>
</svg>
)

const Delete = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
  <path d="M1.66666 14.2222C1.66666 15.2 2.46666 16 3.44444 16H10.5555C11.5333 16 12.3333 15.2 12.3333 14.2222V5.33333C12.3333 4.35556 11.5333 3.55556 10.5555 3.55556H3.44444C2.46666 3.55556 1.66666 4.35556 1.66666 5.33333V14.2222ZM4.33333 5.33333H9.66666C10.1555 5.33333 10.5555 5.73333 10.5555 6.22222V13.3333C10.5555 13.8222 10.1555 14.2222 9.66666 14.2222H4.33333C3.84444 14.2222 3.44444 13.8222 3.44444 13.3333V6.22222C3.44444 5.73333 3.84444 5.33333 4.33333 5.33333ZM10.1111 0.888889L9.47999 0.257778C9.31999 0.0977777 9.08888 0 8.85777 0H5.14222C4.9111 0 4.67999 0.0977777 4.51999 0.257778L3.88888 0.888889H1.66666C1.17777 0.888889 0.777771 1.28889 0.777771 1.77778C0.777771 2.26667 1.17777 2.66667 1.66666 2.66667H12.3333C12.8222 2.66667 13.2222 2.26667 13.2222 1.77778C13.2222 1.28889 12.8222 0.888889 12.3333 0.888889H10.1111Z" fill="#323232"/>
</svg>
)

export function RolesList() { 
     const [deletedRole, setDeletedRole] = useState();

     const handleDelete = (index) => {
      const UpdatedRolesList = [...RolesList];
      UpdatedRolesList.splice(index, 1);
      setDeletedRole(UpdatedRolesList)
     }

  return (
    <div>
        <div className="flex gap-5 mt-10">
         <h2 className="w-[250px] text-[#A1A1A1]">სახელი</h2>
         <h2 className="text-[#A1A1A1]">აღწერა</h2>
         </div>

         <div className="w-full border-t border-gray-200 my-4"></div>

         <div className="flex gap-[120px] mt-8">
            <h2>ადმინისტრატორი</h2>
            <h2>მართვის სრული უფლება, მართვის სრული უფლება</h2>
            <div className="flex ml-[290px] gap-6 mt-1 cursor-pointer" >
            <Help/>
            <Edit/>
            <Delete onClick={() => handleDelete(index)} />
            </div>
         </div>

         <div className="w-full border-t border-gray-200 my-4"></div>

         <div className="flex gap-[120px] mt-8">
            <h2>ადმინისტრატორი</h2>
            <h2>მართვის სრული უფლება, მართვის სრული უფლება</h2>
            <div className="flex ml-[290px] gap-6 cursor-pointer">
            <Help/>
            <Edit/>
            <Delete onClick={() => handleDelete(index)} />
            </div>
         </div>

         <div className="w-full border-t border-gray-200 my-4"></div>

         <div className="flex gap-[120px] mt-8">
            <h2>ადმინისტრატორი</h2>
            <h2>მართვის სრული უფლება, მართვის სრული უფლება</h2>
            <div className="flex ml-[290px] gap-6 cursor-pointer">
            <Help/>
            <Edit/>
            <Delete onClick={() => handleDelete(index)} />
            </div>
         </div>

         <div className="w-full border-t border-gray-200 my-4"></div>

    </div>
  )

}




export default RolesList;