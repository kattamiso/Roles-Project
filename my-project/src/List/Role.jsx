import HelpIcon from "../../Icons/HelpIcon";
import EditIcon from "../../Icons/EditIcon";
import DeleteIcon from "../../Icons/DeleteIcon";
import { useState, useEffect } from 'react';

const Role = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch(' http://localhost:4000/data')
      .then(res => res.json())
      .then(data => {
        setItems(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  const handleDelete = (deleteItemId) => {
    const newItems = items.filter((item) => item.id !== deleteItemId);
    setItems(newItems);
  };
  return (
    <div>
      <div>
        {items &&
          items.map((item, index) => (
            <div key={index} id={item.id} className="flex justify-between w-full">
              <h1 className="w-[40%]">{item.title}</h1>
              <h1 className="w-[40%]">{item.description}</h1>
              <div className="flex justify-center pl-[15rem] gap-6 mt-1 w-[20%] cursor-pointer">
                <HelpIcon />
                <EditIcon />
                <button onClick={() => handleDelete(item.id)}>
                  <DeleteIcon />
                </button>
              </div>
              <hr className="border-b border-gray-100" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Role;
