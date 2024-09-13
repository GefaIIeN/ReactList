import React, { useState } from "react";

import { ListElement } from "../ListElement/ListElement.jsx";
import { createField } from "../../App/AppData.jsx";

import './List.css';

const defaultNameValue = 'Имя';
const defaultSecondNameValue = 'Фамилия';
const defaultDatewValue = '00.00.0000';

export const List = (props) => {
   const {
      elements
   } = props
   const [editElementId, setEditElementId] = useState(null);
   const [list, setList] = useState([...elements]);
   const handleRemove = (id) => {
      setList(list.filter((u => u.id !== id)));
   }

   const handleAdd = () => {
      const newList = [...list];
      newList.push(createField(defaultNameValue, defaultSecondNameValue, defaultDatewValue));
      setList(newList)
   }
   const handleEnterEdit = (id) => {
      if (editElementId != null) {
         console.log('need reset old edit element id');
      }
      setEditElementId(id);
   };

   const handleExitEdit = (newElem) => {
      const newList = list.map(elem => {
         if (elem.id == newElem.id) {
            return { ...newElem };
         } else {
            return elem;
         }
      });
      setList(newList)
      setEditElementId(null);
   }

   return (
      <>
         <ul className={'listElements'}>
            {
               list.map((element) => <ListElement 
                     key={element.id}
                     element={element}
                     onRemove={handleRemove}
                     onEnterEdit={handleEnterEdit}
                     onExitEdit={handleExitEdit}
                     isEdit={element.id==editElementId}
                  />
               )
            }
         </ul>
         <div className={'actionsGroup'}>
            <button id={'actionAdd'} type="button" onClick={() => handleAdd()}>
               Добавить
            </button>
         </div>
      </>
   );
}