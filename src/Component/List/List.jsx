import React, {useState} from "react";
import './List.css';
import { ElementDefault } from "../ElementDefault/ElementDefault.jsx";
import { ElementEdit } from "../ElementEdit/ElementEdit.jsx";
import { createField } from "../../App/AppData.jsx";



export const List = (props) => {
   const [list, setList] = useState([...props.elements]);
   console.log(list);


 
 const handleRemove = (id) => {
   setList(list.filter((u => u.id !== id)));
 }

 const actionAdd = () => {  
  setList([...list,
    createField('Имя ',  'Фамилия ', '00.00.0000')
  ])
 }
 
 function editSave(id, event) {
     const copy = Object.assign([], list);
     copy.id.firstname = event.target.value;
     copy.id.secondname = event.target.value;
     copy.id.birthday = event.target.value;
     setList(copy);
}
function editStart(id) {
     const copy = Object.assign([], list);
     setList(copy.map(element => {
      if (element.id == id) {
         return {...element, [isEdit]: true};
      } else {
         return element;
      }
   }));
}
function editEnd(id) {
     const copy = Object.assign([], list);
     copy.id.isEdit = false;
     setList(copy);
}

 const result = list.map((element) => {
  console.log(element)
	
  let subElement;
  if (element.isEdit) {
      subElement = 
      <div className={'elementListEdit'}>
          <ElementEdit 
              element={element}
              editSave={editSave}
              editEnd={editEnd}
          />
      </div>

  } else {
      subElement = 
      <div className={'elementList'}>
          <ElementDefault 
              element={element}
              actionRemove={handleRemove}
              actionEdit={editStart}
          />
      </div>
  }

  return <li key={element.id}>{subElement}</li>;
});

   return (
    <div>
          <ul>
          {result}
          </ul>
          <button type="button" onClick={() => actionAdd()}>
            Добавить
          </button>

     </div>
   );
}