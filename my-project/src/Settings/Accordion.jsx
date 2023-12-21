import { useState } from "react";
import DropDownIcon from '../../Icons/DropDownIcon'


export function Accordion()  {
        const [activeIndex, setActiveIndex] = useState(null);
      
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
          <div>
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
                <div className={`${activeIndex === index && "rotate-180"} transition-all transform duration-20 ease-in-out `}>
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
            </div>
  )
}

