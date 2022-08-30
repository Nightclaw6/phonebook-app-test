import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { useAppSelector } from "../app/hooks";
import Contact from "../model/Contact";

import ContactList from "../components/contactList";
import NewContact from "../components/NewContact";
import DialogBox from "../components/DialogBox";
import { BsPlusCircleFill } from "react-icons/bs";

const HomePage: React.FC = (props) => {
  let [open, setOpen] = useState(false);
  const getContactList = useAppSelector((state) => state.contact.contactList);

  const [searchTerm, setSearchTerm] = useState("");
  const [contactListData, setContactListData] = useState<Contact[]>();

  useEffect(() => {
    setContactListData(getContactList);
    const filteredData = getContactList.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setContactListData(filteredData);
  }, [getContactList, searchTerm]);
  const DialogHandle = () => {
    setOpen((current) => !current);
  };
  return (
    <div className="flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-black">
      <div className="flex items-center flex-shrink-0 w-full h-16 px-10 bg-white bg-opacity-75">
        <Link to="/">
          <BsPersonCircle className="w-8 h-8 text-indigo-500 stroke-current" />{" "}
        </Link>
        <input
          className="flex items-center h-10 px-4 ml-10 text-sm w-1/3  bg-gray-200 rounded-full focus:outline-none focus:ring"
          type="search"
          placeholder="Search contact …"
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />
        <button
          type="submit"
          className="flex items-center text-indigo-600 p-2 rounded text-sm w-auto"
          onClick={DialogHandle}
        >
          <BsPlusCircleFill />
          <span>&nbsp;Add Contact</span>
        </button>
      </div>
      <ContactList contacts={contactListData} />
      {open && (
        <DialogBox open={open} OnDialogHandle={DialogHandle}>
          <NewContact id={""} />
        </DialogBox>
      )}
    </div>
  );
};

export default HomePage;
