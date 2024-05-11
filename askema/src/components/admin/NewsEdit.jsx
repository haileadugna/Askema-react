import React, { useState } from 'react';
import axios from 'axios'; // You may need to install axios for making HTTP requests
import './NewsEdit.css';
import { NavLink} from 'react-router-dom';

const NewsEdit = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    link: '',
    image: null,
    time: '',
    company: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You may need to serialize the image data before sending it to the server
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('date', formData.date);
    formDataToSend.append('link', formData.link);
    formDataToSend.append('image', formData.image);
    formDataToSend.append('time', formData.time);
    formDataToSend.append('company', formData.company);

    try {
      await axios.post('http://localhost:3000/news', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('News submitted successfully!');
      // Reset the form after successful submission
      setFormData({
        title: '',
        description: '',
        date: '',
        link: '',
        image: null,
        time: '',
        company: ''
      });
      alert('News submitted successfully!');
    } catch (error) {
      console.error('Error submitting news:', error);
      alert('Error submitting news. Please try again later.');
    }
  };

  return (
    <div >
        <NavLink to="/admin/addtestimonail" >
            Add Testimonail
        </NavLink>
      
    
    <form onSubmit={handleSubmit} className='form-container'>
      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} />
      </label>
      <label>
        Date:
        <input type="date" name="date" value={formData.date} onChange={handleChange} />
      </label>
      <label>
        Time:
        <input type="time" name="time" value={formData.time} onChange={handleChange} />
      </label>
      <label>
        Link:
        <input type="text" name="link" value={formData.link} onChange={handleChange} />
      </label>
      <label>
        Image:
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </label>
      <label>
        Company:
        <input type="text" name="company" value={formData.company} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default NewsEdit;
