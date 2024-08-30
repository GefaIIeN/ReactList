import React, {useState} from "react";
import { ElementList } from "../ElementList/ElementList.jsx";
import './List.css';
import { initialValues } from "../App/App.jsx";


export const List = (props) => {
    const [list, setList] = useState(props.initialList);
    const [values, setValues] = useState(initialValues);

   const handleRemove = (id) => {
     const newList = list.filter((item) => item.id !== id);
     setList(newList);
   }
   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

 const handleAdd = (values) => {
  const newList = list.concat({ values, id: uuidv4() });
  setList(newList);
  setName('');
 }
  

   return (
    <div>
          <ul>
          {
                list.map((item, i) => (
                    <div className={'elementList'} key={i}>
                        <ElementList 
                            item={item}
                            handleInputChange = {handleInputChange}
                            actionRemove={handleRemove}
                            handleAdd={handleAdd}
                        />
                    </div>
                ))
            }
          </ul>
     </div>
   );
}