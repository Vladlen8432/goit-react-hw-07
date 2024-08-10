import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts?.items ?? []);

  const [formData, setFormData] = useState({ name: "", number: "" });

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = formData;
    if (name.trim() === "" || number.trim() === "") return;

    dispatch(addContact({ name, number }));
    setFormData({ name: "", number: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="number"
          required
          value={formData.number}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Add contact</button>
      </form>

      {contacts.length > 0 && (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactForm;
