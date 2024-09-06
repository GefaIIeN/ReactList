import React, {useState} from "react";
import './List.css';
import { ElementDefault } from "../ElementDefault/ElementDefault.jsx";
import { ElementEdit } from "../ElementEdit/ElementEdit.jsx";
import { createField } from "../../App/AppData.jsx";



export const List = (props) => {
   const [list, setList] = useState([...props.elements]);
   const [value, setValue] = useState('')
   console.log(list);

  

   const handleEdit = (id) => {

 }
 
 const handleRemove = (id) => {
   removeField(id);
   const newList = list.filter((item) => item.id !== id);
   setList(newList);
 }
 
 const inputValue = (event) => {
  setValue(event.target.value);
 }

 const handleInit = (id) => {
  addField(id);
  const newList = list.concat({id});
  setList(newList);

 }


   const actionAdd = () => {
    createField();
        return (         
          <div className={'elementEdit'} >
              <ElementEdit 
                  element={element}
                  actionRemove={handleRemove}
                  actionInit={handleInit}
                  inputValue={inputValue}
              />
          </div>    
        );
   }


   return (
    <div>
          <ul>
          {
                list.map((element, i) => (
                    <div className={'elementList'} key={i}>
                        <ElementDefault 
                            element={element}
                            actionEdit={handleEdit}
                        />
                    </div>
                ))
            }
          </ul>
          <button type="button" onClick={() => actionAdd()}>
            Добавить
          </button>

     </div>
   );
}