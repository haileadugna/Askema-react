import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import './news.css';

function News() {
    const [newsItems, setNewsItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/news');
                const processedData = response.data.map(async (news) => {
                    // Convert Buffer to base64 URL using FileReader
                    const base64String = await bufferToBase64(news.image.data);
                    const imageUrl = `data:${news.image.contentType};base64,${base64String}`;
                    return { ...news, imageUrl };
                });
                // Resolve promises
                const resolvedData = await Promise.all(processedData);
                setNewsItems(resolvedData);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchData();
    }, []);

    // Function to convert Buffer data to base64 URL using FileReader
    const bufferToBase64 = (buffer) => {
        return new Promise((resolve, reject) => {
            const blob = new Blob([buffer], { type: 'image/jpeg' });
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                resolve(reader.result.split(',')[1]);
            };
            reader.onerror = reject;
        });
    };

    return (
        <section id="news">
            <h2>Our new stories</h2>
            <div className="news_container">
                {newsItems.map((news) => (
                    console.log('Image URL:', news.imageUrl),
                    console.log('Image Data:', news.image),
                    <div className="news-item" key={news._id}>
                        <img src={news.imageUrl} alt="News Image" />
                        <a href={news.link}>{news.title}</a>
                        <p>{news.description}</p>
                        <p>{news.date}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default News;
