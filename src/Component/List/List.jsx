import React, {useState} from "react";
import './List.css';
import { ElementDefault } from "../ElementDefault/ElementDefault.jsx";
import { ElementEdit } from "../ElementEdit/ElementEdit.jsx";
import { addField, createField } from "../../App/AppData.jsx";



export const List = (props) => {
   const [list, setList] = useState([...props.elements]);
   const [value, setValue] = useState('')
   console.log(list);


 
 const handleRemove = (id) => {
   setList(list.filter((u => u.id !== id)));
 }

 const actionAdd = () => {  
  setList([...list,
    createField('Имя ',  'Фамилия ', '00.00.0000')
  ])
 }
 
 const handleEdit = () => {

 }

 const inputValue = (event) => {
  setValue(event.target.value);
 }

 const handleInit = (id) => {

 }



   return (
    <div>
          <ul>
          {
                list.map((element, i) => (
                    <div className={'elementList'} key={i}>
                        <ElementDefault 
                            element={element}
                            actionEdit={handleRemove}
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