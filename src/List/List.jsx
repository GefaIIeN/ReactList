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


   return (
    <div>
          <ul>
          {
                list.map((item, i) => (
                    <div className={'elementList'} key={i}>
                        <ElementList 
                            item={item}
                            actionRemove={handleRemove}
                        />
                    </div>
                ))
            }
          </ul>
     </div>
   );
}