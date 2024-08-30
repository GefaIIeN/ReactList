import React, {useState} from "react";
import { ElementForm } from "../ElementForm/ElemenForm.jsx";
import './List.css';
import { initialValues } from "../App/App.jsx";


export const Form = (props) => {
    const [list, setList] = useState(props.initialList);
    const [values, setValues] = useState(initialValues);

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
                        <ElementForm
                            item={item}
                            actionInputChange = {handleInputChange}
                            actionAdd={handleAdd}
                        />
                    </div>
                ))
            }
          </ul>
     </div>
   );
}