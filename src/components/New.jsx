import { useState } from 'react';
import FormBody from './Form';
import { createItem } from '../lib/api/item';
import { useNavigate } from 'react-router-dom';

function New() {
  // State to hold item's data
  const [value, setValue] = useState({});
  // React Router hook for navigation
  const navigate = useNavigate();

  // Function to handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Updates the state with the new value for the corresponding input field
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Creates new item using the provided data
      await createItem(value);
      // Navigates back to the main list after successful submission
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Restaurant Inventory Management Application</h1>
      <h3>New Item</h3>
      {/* Renders Form component with appropriate props */}
      <FormBody
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={value}
        buttonType="Add"
      />
    </div>
  );
}

export default New;