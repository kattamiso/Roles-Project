import  { useState } from 'react'
import { Link } from 'react-router-dom'
import DropDownIcon from '../../Icons/DropDownIcon'
import CloseIcon from '../../Icons/CloseIcon'

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
          <div className={`${activeIndex === index && "rotate-180"} transition-all transform duration-600 ease-in-out `} onClick={hanldeClick('')}>
          <DropDownIcon/>  
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
        <CloseIcon/>
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