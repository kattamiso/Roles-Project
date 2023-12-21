import { Link } from 'react-router-dom'
import CloseIcon from '../../Icons/CloseIcon'
import {Accordion} from './Accordion'
import  { useState } from 'react'

export function Settings() {
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [isPending, setIsPending] = useState(false)
   
   const handleSubmit = (e) => {
         e.preventDefault();
         const data = {title, description};
         console.log(data)

         setIsPending(true)

         fetch('http://localhost:3000/data', {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(data)
         }).then(() =>{
          console.log("New Blog added")
          setIsPending(false);
         })
   }

   return(
     <div>
       { isPending && <div>Loading...</div> }

     <div className="flex p-8 gap-9 text-bold">
     <Link to="/">
       <CloseIcon/>
      </Link>

     <h1>როლის დამატება</h1>
     </div>
   <form onSubmit={handleSubmit}>

   <div>
    { !isPending && <button type='submit'  className=" bg-[#1F5EDD] cursor-pointer text-white p-1 text-base font-semibold uppercase w-[90px] rounded-md ml-[1200px] mt-[-53px] absolute hover:text-black">
      შენახვა
    </button>}
    { isPending && <button disabled className=" bg-[#1F5EDD] text-white p-1 text-base font-semibold uppercase w-[90px] rounded-md ml-[1200px] mt-[-53px] absolute hover:text-black">
      is Pending
    </button>}
   </div>

   <div className="ml-[80px]">
    <h2 className="text-sm mb-2">როლის სახელწოდება
      <span className="text-red-600 pl-1">*</span>
      </h2>

      <input type="text" required value={title}
      onChange={(e) => setTitle(e.target.value)} className="border border-gray-300 rounded-md px-4 py-2 w-[1000px] focus:outline-none focus:ring-2 focus:border-blue-300">
      </input>
  </div>

   <div className="ml-[80px] mt-5">
    <h2 className="text-sm mb-2">როლის აღწერა</h2>

      <input type="text" value={description} 
      onChange={(e) => setDescription(e.target.value)} className="border w-[1000px] border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:border-blue-300 ">
      </input>
  </div>
</form>
  <div className='ml-[80px] mt-8'>
    <h4>როლის უფლებები</h4>
  </div>
    {/* <h1>{title}</h1> */}
    {/* <h2>{description}</h2> */}
  <div className='mt-8 ml-[80px]'> 
    <Accordion/>
  </div>
</div>
)
}

export default Settings
