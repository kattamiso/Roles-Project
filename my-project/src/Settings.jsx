import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const DropDown = () =>(
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
  <path d="M1 1L7 7L13 1" stroke="#261C15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>)


const X =() => (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
  <path d="M11.7338 0.775313C11.3788 0.420364 10.8055 0.420364 10.4505 0.775313L6 5.21672L1.54949 0.766212C1.19454 0.411263 0.62116 0.411263 0.266212 0.766212C-0.0887372 1.12116 -0.0887372 1.69454 0.266212 2.04949L4.71672 6.5L0.266212 10.9505C-0.0887372 11.3055 -0.0887372 11.8788 0.266212 12.2338C0.62116 12.5887 1.19454 12.5887 1.54949 12.2338L6 7.78328L10.4505 12.2338C10.8055 12.5887 11.3788 12.5887 11.7338 12.2338C12.0887 11.8788 12.0887 11.3055 11.7338 10.9505L7.28328 6.5L11.7338 2.04949C12.0796 1.70364 12.0796 1.12116 11.7338 0.775313Z" fill="#323232"/>
</svg>
)

  const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const hanldeClick = () => {
    console.log('Hello Mari')
  }

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    {
      title: 'ჩანართები',
      options: [
        'ჩანართის შექმნა',
       'ჩანართის რედაქტირება',
      ],
        optionInfo: [
        'მომხმარებელს შეუძლია შექმნას ჩანართები',
        'მომხმარებელს შეუძლია შექმნილი ჩანართების რედაქტირება',
        ],
    },
    {
      title: 'მომხმარელები',
      options: [
        'მომხმარებლის შექმნა',
       'მომხმარებლის რედაქტირება',
        'მომხმარებლის წაშლა'],
        optionInfo: [
        'მომხმარებელს შეუძლია შექმნას ჩანართები',
        'მომხმარებელს შეუძლია შექმნილი ჩანართების რედაქტირება',
        ],
    },
    {
      title: 'კლასიფიკატორები',
      options: [
        'მომხმარებლის შექმნა',
       'მომხმარებლის რედაქტირება',
        'მომხმარებლის წაშლა'],
        optionInfo: [
        'მომხმარებელს შეუძლია შექმნას ჩანართები',
        'მომხმარებელს შეუძლია შექმნილი ჩანართების რედაქტირება',
        ],
    },
    {
      title: 'ინდიკატორების ბანკი',
      options: [
        'მომხმარებლის შექმნა',
       'მომხმარებლის რედაქტირება',
        'მომხმარებლის წაშლა'],
        optionInfo: [
        'მომხმარებელს შეუძლია შექმნას ჩანართები',
        'მომხმარებელს შეუძლია შექმნილი ჩანართების რედაქტირება',
        'მომხმარებელს შეუძლია შექმნილი წაშლა',
        ],
    },
  ];


  return (
    <div className="mt-5  flex flex-col gap-8 w-[1200px] rounded-3xl">
      {sections.map((section, index) => (
        <div className="pb-2 flex-col flex  " key={index}>
          <div className='flex justify-between items-center p-2 bg-slate-200 rounded-t-[12px]'
          
          onClick={() => toggleAccordion(index)}       
          >

        <div
            className="font-bold cursor-pointer "
            >
            {section.title}
          </div>
          <div className={`${activeIndex === index && "rotate-180"} transition-all transform duration-500 ease-in-out `} onClick={hanldeClick('')}>
          <DropDown/>  
          </div>
            </div>
          {activeIndex === index && (
            <div className="flex flex-col rounded-b-[12px] border-grey w-full bg-slate-200 p-2 ">
              {section.options.map((option, optionIndex) => (
                <div className="flex justify-between items-center  p-3 hover:bg-[#EEF4FF]  rounded-2xl cursor-pointer" key={optionIndex}>
                  <div>

                  <label className="cursor-pointer flex items-center">
                    <p>{option}</p>
                  </label>
                  <p className="text-xs">{section.optionInfo[optionIndex]}</p> 
                  </div>
                  <input type="checkbox"  value={option}  />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export function Settings() {
     
  return (
    <div>
      <div className="flex p-8 gap-9 text-bold">

      <Link to="/">
        <X/>
      </Link>

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

      <div className='ml-[80px] mt-8'>
        <h4>როლის უფლებები</h4>
      </div>
      
      <div className='mt-8 ml-[80px]'> 
         <Accordion/>
      </div>
 
    </div>
  )
}

export default Settings