import React, { useState } from "react";

import { createField, IField } from "../../App";
import { ListElement } from "../ListElement/ListElement";

import './List.scss';

const defaultNameValue: string = 'Имя';
const defaultSecondNameValue: string = 'Фамилия';
const defaultDatewValue: Date = new Date('00.00.0000');

type ListProps = {
    elements: IField[]
}

export const List = ({
    elements
}:ListProps): JSX.Element => {
   
   const [editElementId, setEditElementId] = useState<string|null>(null);
   const [list, setList] = useState<IField[]>([...elements]);

   const handleRemove = (id: string) => {
      setList(list.filter((u => u.id !== id)));
   }

   const handleAdd = () => {
      const newList = [...list];
      newList.push(createField(defaultNameValue, defaultSecondNameValue, defaultDatewValue));
      setList(newList)
   }
   const handleEnterEdit = (id: string) => {
      if (editElementId != null) {
         console.log('need reset old edit element id');
      }
      setEditElementId(id);
   };

   const handleExitEdit = (newElem: IField) => {
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