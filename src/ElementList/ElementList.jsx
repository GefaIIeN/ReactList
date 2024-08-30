import React, { useState } from "react";

export const ElementList = (props) => {
    const {item} = props;
    return (
        <div>
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