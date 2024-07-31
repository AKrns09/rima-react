import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateItem, getDetail } from '../lib/api/item';
import FormBody from './Form';

function Edit() {
  // State that holds an item's data for editing
  const [value, setValue] = useState({
    name: '',
    info: '',
  });

  const query = useParams();
  const navigate = useNavigate();

  // Fetches item details when the query changes or the Edit component mounts
  useEffect(() => {
    fetchData(query);
  }, [query]);

  // Function that fetches item details for editing
  const fetchData = async (query) => {
    try {
      const response = await getDetail(query.id);
      const { name, info } = response.data;
      // Sets the fetched data in the state for editing
      setValue({
        name,
        info,
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Function that handles changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Updates the state with the new value for the corresponding input field
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  // Function that handles form submission for updating item
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Updates the item's details with the provided data
      await updateItem(query.id, value);
      // Navigates back to the main list after successful update
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Restaurant Inventory Management Application</h1>
      <h3>Edit Item</h3>
      {/* Renders Form component with appropriate props */}
      <FormBody
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={value}
        buttonType="Update"
      />
    </div>
  );
}

export default Edit;