import React, { useState, useEffect } from 'react';

function News() {
    const [newsItems, setNewsItems] = useState([]);

    // Simulating fetching data from an API
    useEffect(() => {
        // Replace this URL with the actual endpoint from which you're fetching news data
        fetch('https://your-api-endpoint.com/news')
            .then(response => response.json())
            .then(data => setNewsItems(data))
            .catch(error => console.error('Error fetching news:', error));
    }, []);

    return (
        <section id="news">
            <br /><hr />
            <div className="container">
                {newsItems.map((news, index) => (
                    <div className="news-item" key={index}>
                        <img src={news.image} alt="News Image" />
                        <h3>{news.title}</h3>
                        <p>{news.summary}</p>
                        <button className="btn view-details" onClick={() => console.log('Viewing details for news ID:', news.id)}>View Details</button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default News;
