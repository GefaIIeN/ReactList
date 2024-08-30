import React, { useState } from "react";

export const ElementForm = () => {
    return (
        <div>
            <div>
                <input
                    value={values.firstname}
                    onChange={() => actionInputChange()}
                    name="firstname"
                    label="Имя"
                />
                <input
                    value={values.lastname}
                    onChange={() => actionInputChange()}
                    name="lastname"
                    label="Фамилия"
                />
                <input
                    value={values.birthday}
                    onChange={() => actionInputChange()}
                    name="birthday"
                    label="Дата Рождения"
                />
            </div>

            <button type="button" onClick = {() => actionAdd()}>
            Добавить
            </button>
        </div>
    )
}