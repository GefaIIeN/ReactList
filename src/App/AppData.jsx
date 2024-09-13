import { v4 as uuv4 } from 'uuid';
const UserFields = [];


export const createField = (firstName, secondName, birthDay, id) => {
  return {
      id: id ? id : uuv4(),
      isEdit: false,
      firstname: firstName,
      secondname: secondName,
      birthday: birthDay,
  };
}

export const initFields = () => {
  UserFields.push(createField('Гарри ',  'Поттер ', '31.07.1980'));
  UserFields.push(createField('Гермиона ',  'Грейнджер ', '19.09.1979'));
  UserFields.push(createField('Рон ',  'Уизли ', '01.05.1980'));
  UserFields.push(createField('Драко ',  'Малфой ', '31.08.1980'));
  UserFields.push(createField('Дафна ',  'Гринграсс ', '09.01.1960'));
}

export const addField = (firstName, secondName, birthDay) => {
  UserFields.push(createField(firstName,  secondName, birthDay));
}

export const removeField = (id) => {
  UserFields = UserFields.filter(u => u.id == id);
}

export const getUsers = () => {
  return [...UserFields];
};