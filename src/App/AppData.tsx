import { v4 as uuv4 } from 'uuid';
let UserFields: IField[] = [];

export interface IField {
  id: String,
  isEdit: Boolean,
  firstname: String,
  secondname: String,
  birthday: Date
}

export const createField = (firstName: string, secondName: string, birthDay: Date, id?: string) : IField => {
  return {
      id: id ? id : uuv4(),
      isEdit: false,
      firstname: firstName,
      secondname: secondName,
      birthday: birthDay,
  } as IField;
}

export const initFields = () => {
  UserFields.push(createField('Гарри ',  'Поттер ', new Date('31.07.1980')));
  UserFields.push(createField('Гермиона ',  'Грейнджер ', new Date('19.09.1979')));
  UserFields.push(createField('Рон ',  'Уизли ', new Date('01.05.1980')));
  UserFields.push(createField('Драко ',  'Малфой ', new Date('31.08.1980')));
  UserFields.push(createField('Дафна ',  'Гринграсс ', new Date('09.01.1960')));
}

export const addField = (firstName: string, secondName: string, birthDay: Date) => {
  if (birthDay.getFullYear() > 1970) {
    UserFields.push(createField(firstName,  secondName, birthDay));
  }
}

export const removeField = (id: string) => {
  UserFields = UserFields.filter(u => u.id == id);
}

export const getUsers = () => {
  return [...UserFields];
};