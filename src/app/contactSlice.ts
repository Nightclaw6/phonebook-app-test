import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import Contact from "../model/Contact";
import { v4 as uuidv4 } from "uuid";

type initialStateType = {
  contactList: Contact[];
};

const contactList: Contact[] = [
  {
    id: uuidv4(),
    name: "Adrian Stoian",
    email: "adrian@gmail.com",
    telephone: "4168881234",
  },
  {
    id: uuidv4(),
    name: "John Smith",
    email: "johnsmith@gmail.com",
    telephone: "4168874567",
  },
  {
    id: uuidv4(),
    name: "Dora Clark",
    email: "dora.clark@gmail.com",
    telephone: "4168877897",
  },
  {
    id: uuidv4(),
    name: "Angela Stones",
    email: "angelaS@gmail.com",
    telephone: "4168891232",
  },
  
];

const initialState: initialStateType = {
  contactList,
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contactList.push(action.payload);
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const {
        payload: { id, name, email, telephone },
      } = action;

      state.contactList = state.contactList.map((contact) =>
        contact.id === id ? { ...contact, name, email, telephone } : contact
      );
    },
    removeContact: (state, action: PayloadAction<{ id: string }>) => {
      state.contactList = state.contactList.filter(
        (contact) => contact.id !== action.payload.id
      );
    },
  },
});

export const { addContact, updateContact, removeContact } =
  contactSlice.actions;
export const getContactList = (state: RootState) => state.contact.contactList;

export default contactSlice.reducer;
