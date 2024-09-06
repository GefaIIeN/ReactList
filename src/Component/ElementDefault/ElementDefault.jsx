import React, { useState } from "react";

export const ElementDefault = (props) => {
    console.log(props);

    const element = {props};

    return (
        <div>
            <li id={element.id}>
                <span> {element.firstname} </span>
                <span> {element.secondname} </span>
                <span> {element.birthday} </span>
                <button type="button" onClick={() => props.actionEdit(element.id)}>
                    Редактировать
                </button>
            </li>
        </div>
    );
}