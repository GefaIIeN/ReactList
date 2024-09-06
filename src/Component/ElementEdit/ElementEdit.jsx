import React, { useState } from "react";

export const ElementEdit = (props) => {
    console.log(props);

    const element = {props};

    return (
        <div>
            <li id={element.id}>
                <input firstName={element.firstname} onChange={inputValue} />
                <input secondName={element.secondname} onChange={inputValue} />
                <input birthDay={element.birthday} onChange={inputValue} />
                <button type="button" onClick={() => props.actionRemove(element.id)}>
                    Удалить
                </button>
                <button type="button" onClick={() => props.actionInit(element.id)}>
                    Сохранить
                </button>
            </li>
        </div>
    );
}