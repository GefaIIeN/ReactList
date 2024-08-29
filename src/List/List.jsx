import React, {useState} from "react";
import { ElementList } from "../ElementList/ElementList.jsx";
import './List.css';

export const List = (props) => {
    const [list, setList] = useState(props.initialList);

   const handleRemove = (id) => {
     const newList = list.filter((item) => item.id !== id);
     setList(newList);
   }

   return (
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
   );
}