import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./News.css";

function News() {
  const [news, setNews] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);
  const [filterOption, setFilterOption] = useState("general");

  useEffect(() => {
    const apiKey = process.env.REACT_APP_FINHUB_API_KEY;
    const newsApiUrl = `https://finnhub.io/api/v1/news?category=${filterOption}&token=${apiKey}`;

    axios
      .get(newsApiUrl)
      .then((response) => {
        const newsData = response.data.slice(1, 26);
        setNews(newsData);
        setLoadingNews(false);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setLoadingNews(false);
      });
  }, [filterOption]);

  const handleCategoryFilterChange = (event) => {
    setFilterOption(event.target.value);
  };

  return (
    <div>
      <div className="header">
        <div className="left">
          <img src="/stock-logo.svg" alt="Stock Tracker Logo" />
          <h1>Stock Tracker</h1>
        </div>

        <div className="right">
          <Link to="/">
            <button>Return to Home</button>
          </Link>
        </div>
      </div>

      <div className="News">

        <div className="filters">
          <h2>WHAT'S TRENDING</h2>
          <select
              value={filterOption}
              onChange={handleCategoryFilterChange}
              className="filter-select"
            >
              <option value="general">General News</option>
              <option value="forex">Forex News</option>
              <option value="crypto">Crypto News</option>
              <option value="merger">Merger News</option>
          </select>
        </div>


        {loadingNews ? (
          <p>Loading news...</p>
        ) : (
          <ul>
            {news.map((newsItem) => (
              <li key={newsItem.id}>
                <a
                  href={newsItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {newsItem.headline}
                </a>
                <p>{newsItem.summary}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default News;
