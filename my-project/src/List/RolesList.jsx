import Role from "./Role"

export function RolesList() { 

  return (
    <div className="w-full">
        <div className="flex gap-5 mt-10 w-full border-b pb-6  border-gray-200 my-4">
         <h2 className=" text-[#A1A1A1] w-[35%]">სახელი</h2>
         <h2 className="text-[#A1A1A1] w-[40%]">აღწერა</h2>
         </div>
        
       <Role/>
    </div>
  )

}




export default RolesList;