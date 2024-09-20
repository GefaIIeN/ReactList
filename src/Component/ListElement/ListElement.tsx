import React, { useState } from "react";

import { createField, IField } from "../../App";


import './ListElement.scss';

type Props = {
        element: IField, 
        onRemove: (id: string) => void, 
        onEnterEdit: (id: string) => void, 
        onExitEdit: (newElem: IField) => void, 
        isEdit: boolean  
}

export const ListElement = ({
    element, 
    onRemove, 
    onEnterEdit, 
    onExitEdit, 
    isEdit
    }:Props): JSX.Element => {


    const [changedFirstNameValue, setFirstNameValue] = useState(element.firstname);
    const [changedSecondNameValue, setSecondNameValue] = useState(element.secondname);
    const [changedBirthdayValue, setBirthdayValue] = useState(element.birthday.toLocaleDateString("ru-RU"));

    const handleChange = (type: any, value: any) => {
        if (''+type == 'firstName') {
            setFirstNameValue(value);
        } else if (''+type == 'secondName') {
            setSecondNameValue(value);
        } else if (''+type == 'birthday') {
            setBirthdayValue(value);
        }
    }

    const getEditElement = () => {
        return (
        <div className="editElements">
            <input value={changedFirstNameValue} onChange={(event)=>{handleChange('firstName', event.target.value)}} />
            <input value={changedSecondNameValue} onChange={(event)=>{handleChange('secondName', event.target.value)}} />
            <input value={changedBirthdayValue} onChange={(event)=>{handleChange('birthday', event.target.value)}} />
        </div>
        );
    }

    const getEditButton = () => {
        if (isEdit) {
                return (
                    <button type="button" onClick={() => onExitEdit(createField(changedFirstNameValue, changedSecondNameValue, new Date(changedBirthdayValue), element.id))}>{`Выйти из редактирования`}</button>
            );
        } else {
            return (
                <button type="button" onClick={() => onEnterEdit(element.id)}>{`Редактирование`}</button> 
            );
        }
    }

    return (
        <li className={'listElement'}>
            <div>
                {
                (!isEdit) ?
                    <div className="showElements">
                    <label className="showElement">{`${changedFirstNameValue}`}</label>
                    <label className="showElement">{`${changedSecondNameValue}`}</label>
                    <label className="showElement">{`${changedBirthdayValue}`}</label>
                    </div> :
                    getEditElement()
                }
            </div>
            <div>
                {(getEditButton())}
                <button type="button" onClick={() => onRemove(element.id)}>{`Удалить`}</button>
            </div>
            
        </li>
    );
}