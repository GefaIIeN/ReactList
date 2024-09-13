import React, { useState } from "react";

export const ElementDefault = (props) => {

    const {element} = props;

    return (
        <div id={element.id}>
                <span> {element.firstname} </span>
                <span> {element.secondname} </span>
                <span> {element.birthday} </span>
                <button type="button" onClick={() => props.actionEdit(element.id)}>
                    Редактировать
                </button>
                <button type="button" onClick={() => props.actionRemove(element.id)}>
                    Удалить
                </button>
        </div>
    );
}