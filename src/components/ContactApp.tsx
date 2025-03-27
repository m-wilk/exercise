import { useState } from "react";

interface Contact {
  id: number;
  name: string;
  phone: string;
}

const ContactApp = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [newContact, setNewContact] = useState<Contact>({
    id: 0,
    name: "",
    phone: "",
  });

  const addContact = () => {
    setContacts([...contacts, { ...newContact, id: Math.random() }]);
    setNewContact({ id: 0, name: "", phone: "" });
  };

  const removeContact = (id: number) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="flex justify-center py-20 h-screen bg-gray-200">
      <div className="min-w-2xl sm:w-1/4 md:w-2/5 bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-2xl mb-5">Contacts</h1>
        <div className="grid grid-cols-1 md:grid-cols-[_1fr_1fr_2fr] gap-4 mb-5">
          <input
            type="text"
            value={newContact.name}
            onChange={(e) =>
              setNewContact({ ...newContact, name: e.target.value })
            }
            placeholder="Name"
            className="p-2 border"
          />
          <input
            type="text"
            value={newContact.phone}
            onChange={(e) =>
              setNewContact({ ...newContact, phone: e.target.value })
            }
            placeholder="Phone"
            className="p-2 border"
          />
          <button
            className="bg-blue-400 text-white py-2 px-3 rounded-md"
            onClick={addContact}
          >
            Add Contact
          </button>
        </div>

        <ul>
          {contacts.map((contact) => (
            <li
              className="grid grid-cols-1 items-center md:grid-cols-[_2fr_1fr] gap-4 mb-5"
              key={contact.id}
            >
              <span className="p-2 bg-gray-200 text-gray-400">
                {contact.name} - {contact.phone}
              </span>
              <button
                className="bg-red-400 text-white py-2 px-3 rounded-md"
                onClick={() => removeContact(contact.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactApp;
