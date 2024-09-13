import React, { useState } from "react";

export const ElementEdit = (props) => {
    console.log(props);

    const {element} = props;

    return (
        <div id={element.id}>
                <input value={element.firstname} onChange={editSave(element.id, event)} />
                <input value={element.secondname} onChange={editSave(element.id, event)} />
                <input value={element.birthday} onChange={editSave(element.id, event)} />
                <button type="button" onBlur={() => props.editEnd(element.id)}>
                    Закончить редактирование
                </button>
        </div>
    );
}