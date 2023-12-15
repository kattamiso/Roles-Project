
const X =() => (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
  <path d="M11.7338 0.775313C11.3788 0.420364 10.8055 0.420364 10.4505 0.775313L6 5.21672L1.54949 0.766212C1.19454 0.411263 0.62116 0.411263 0.266212 0.766212C-0.0887372 1.12116 -0.0887372 1.69454 0.266212 2.04949L4.71672 6.5L0.266212 10.9505C-0.0887372 11.3055 -0.0887372 11.8788 0.266212 12.2338C0.62116 12.5887 1.19454 12.5887 1.54949 12.2338L6 7.78328L10.4505 12.2338C10.8055 12.5887 11.3788 12.5887 11.7338 12.2338C12.0887 11.8788 12.0887 11.3055 11.7338 10.9505L7.28328 6.5L11.7338 2.04949C12.0796 1.70364 12.0796 1.12116 11.7338 0.775313Z" fill="#323232"/>
</svg>
)

export function Settings() {
    
  return (
    <div>
      <div className="flex p-8 gap-9 text-bold">
        <button>
        <X/>
        </button>

        <h1>როლის დამატება</h1>
        </div>

        <div>
          <button className=" bg-[#1F5EDD] text-white p-1 text-base font-semibold uppercase w-[90px] rounded-md ml-[1200px] mt-[-53px] absolute hover:text-black">
            შენახვა
          </button>
        </div>

      <div className="ml-[80px]">
        <h2 className="text-sm mb-2">როლის სახელწოდება
          <span className="text-red-600 pl-1">*</span>
          </h2>

          <input type="text" className="border border-gray-300 rounded-md px-4 py-2 w-[1000px] focus:outline-none focus:ring-2 focus:border-blue-300">
          </input>
      </div>

      <div className="ml-[80px] mt-5">
        <h2 className="text-sm mb-2">როლის აღწერა</h2>

          <input type="text" className="border w-[1000px] border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:border-blue-300 ">
          </input>
      </div>

      <div>
        <h4>როლის უფლებები</h4>
        <h3 className="text-bold">ჩანართები</h3>
      </div>

       




    </div>
  )
}

export default Settings