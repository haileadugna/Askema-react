import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const NewsList = () => {
  const [newsItems, setNewsItems] = useState([]);

  // Fetch news items from the backend
  useEffect(() => {
    const fetchNewsItems = async () => {
      try {
        const response = await axios.get('http://localhost:3000/news');
        setNewsItems(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNewsItems();
  }, []);

  console.log(newsItems)
  // Delete a news item
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/news/${id}`);
      setNewsItems(newsItems.filter(item => item.id !== id));
      alert('News deleted successfully!');
    } catch (error) {
      console.error('Failed to delete news item:', error);
      alert('Error deleting news. Please try again.');
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>News List</h1>
      <NavLink to="/admin/news">Add News</NavLink>
      <ul>
        {newsItems.map(item => (
          <li key={item.id} style={{ margin: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
            {/* <img src={news.imageUrl} alt="News Image" /> */}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <small>Date: {item.date}</small><br />
            <small>Time: {item.time}</small><br />
            <small>Link: {item.link}</small><br />
            <small>Company: {item.company}</small>
            <div>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
              <NavLink to={`/admin/newsedit/${item.id}`} style={{ marginLeft: '10px' }}>
                Edit
              </NavLink>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
