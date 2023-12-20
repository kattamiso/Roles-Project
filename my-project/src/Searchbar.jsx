import { SearchIcon } from "../Icons/SearchIcon";



export function Searchbar() {

    return (
    <div className="ml-[500px] w-[300px] mt-"> 
      <input
        className="w-[300px] pl-5 border rounded-xl focus:outline-none focus:border-blue-300"
        type="text"
        placeholder="ძებნა"
      />   
        <div className="mt-[-24px]">
       <SearchIcon />
       </div>
    </div>
  );
}

export default Searchbar;
