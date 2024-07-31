import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { deleteItem, getList } from '../lib/api/item';

function List() {
  // State to hold list of items
  const [dataList, setDataList] = useState([]);
  // React Router hook for navigation
  const navigate = useNavigate();

  // Fetches list of items when List component mounts
  useEffect(() => {
    fetchList();
  }, []);

  // Function to fetch list of items from API
  const fetchList = async () => {
    try {
      const response = await getList();
      setDataList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle deletion of an item
  const handleDelete = async (item) => {
    try {
      // Deletes the item from the API
      await deleteItem(item.id);
      // Removes the deleted item from the dataList state
      setDataList((prevDataList) => prevDataList.filter((dataItem) => dataItem.id !== item.id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Restaurant Inventory Management Application</h1>
      <h3>Items</h3>
      <div className="card-deck mt-3">
        {/* Maps through list of items and display them */}
        {dataList.map((item) => (
          <div className="card mb-3" key={item.id}> 
            <div className="card-body">
              <div style={{ width: '8rem', display: 'inline-block' }}>
                <h5 className="card-text" >Title: {item.name}</h5>
              </div>
              <div style={{ width: '28rem', display: 'inline-block' }}>
                <h5 className="card-text">Information: {item.info}</h5>
              </div>
              <div style={{ display: 'inline-block' }}>
              {/* Link to navigate to the "Edit Item" page */}
                <Link to={`/edit/${item.id}`} className="btn btn-primary me-2">
                  Edit
                </Link>
                {/* Button to delete the item */}
                <button className="btn btn-danger" onClick={() => handleDelete(item)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Button to navigate to the "Add Item" page */}
      <button className="btn btn-primary" id="btn" onClick={() => navigate('/new')}>
        Add
      </button>
    </div>
  );
}

export default List;