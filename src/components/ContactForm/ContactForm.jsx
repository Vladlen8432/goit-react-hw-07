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

  const resetForm = () => {
    setFormData({ name: "", number: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = formData;

    if (name.trim() === "" || number.trim() === "") return;

    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
    resetForm();
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
          placeholder="Enter name"
        />
        <br />
        <input
          type="tel"
          name="number"
          required
          value={formData.number}
          onChange={handleChange}
          placeholder="Enter phone number"
        />
        <br />
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
