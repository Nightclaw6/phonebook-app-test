import * as React from "react";
import {
  BsFillPenFill,
  BsFillTrashFill,
  BsFillCalendar3WeekFill,
  BsReplyAllFill,
  BsShareFill,
  BsMailbox2,
  BsTelephoneFill,
  BsFilePerson,
} from "react-icons/bs";
import Contact from "../model/Contact";
import { useAppDispatch } from "../app/hooks";
import { removeContact } from "../app/contactSlice";

interface ContactProps {
  contact: Contact;
  onContactUpdate: (id: string) => void;
}

const ContactInfo: React.FC<ContactProps> = (props) => {
  const dispatch = useAppDispatch();
  const contact = props.contact;

  const setUpdatePage = (id: string) => {
    props.onContactUpdate(id);
  };

  return (
    <div className="bg-white-500">
      <div className="flex flex-col pb-2 overflow-auto">
        <div
          className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
          draggable="true"
        >
          <button
            className="absolute top-0 right-0  items-center justify-center w-5 h-5 mt-3 mr-2 text-indigo-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex"
            onClick={() => setUpdatePage(contact.id)}
          >
            <BsFillPenFill />
          </button>
          <button
            className="absolute top-7 right-0  items-center justify-center w-5 h-5 mt-3 mr-2 text-indigo-500 rounded bg-gray-200 hover:text-gray-700 group-hover:flex"
            onClick={() => dispatch(removeContact({ id: contact.id }))}
          >
            <BsFillTrashFill />
          </button>

          <div className="rounded-md pl-6 text-sm font-medium text-gray-800">
            <div className="flex items-center w-full mt-3 ">
              <div className="flex items-center">
                <BsFilePerson />
                <span className="ml-1 leading-none">{contact.name}</span>
              </div>
            </div>

            <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
              <div className="flex items-center">
                <BsTelephoneFill />
                <span className="ml-1 leading-none">{contact.telephone}</span>
              </div>
            </div>

            <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
              <div className="flex items-center">
                <BsMailbox2 />
                <span className="ml-1 leading-none">{contact.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
