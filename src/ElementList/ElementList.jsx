import React, { useState } from "react";

export const ElementList = (props) => {
    const {item} = props;
    return (
        <div>
            <div>
                <input
                    value={values.firstname}
                    onChange={handleInputChange}
                    name="firstname"
                    label="Имя"
                />
                <input
                    value={values.lastname}
                    onChange={handleInputChange}
                    name="lastname"
                    label="Фамилия"
                />
                <input
                    value={values.birthday}
                    onChange={handleInputChange}
                    name="birthday"
                    label="Дата Рождения"
                />
            </div>

            <button type="button" onClick = {handleAdd}>
            Добавить
            </button>
        
            <li id={item.id}>
                <span>{item.firstname}</span>
                <span>{item.lastname}</span>
                <span>{item.birthday}</span>
                <button type="button" onClick={() => props.actionRemove(item.id)}>
                    Удалить
                </button>
                <button type="button" onClick={() => props.actionRemove(item.id)}>
                    ↑
                </button>
                <button type="button" onClick={() => props.actionRemove(item.id)}>
                    ↓
                </button>
                <button type="button" onClick={() => props.actionRemove(item.id)}>
                    ⇈
                </button>
                <button type="button" onClick={() => props.actionRemove(item.id)}>
                    ⇊
                </button>
            </li>
        </div>
    );
}