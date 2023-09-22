import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Charts.css";
import axios from "axios";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import Footer from "./Footer";

function Charts() {
  const [bestMatches, setBestMatches] = useState([]);
  const [charmData, setCharmData] = useState({});
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("");

  const handleScroll = () => {
    const scrollButton = document.getElementById("scroll");
    if (scrollButton) {
      if (window.scrollY > 100) {
        scrollButton.classList.add("fade-in");
        scrollButton.classList.remove("fade-out");
      } else {
        scrollButton.classList.remove("fade-in");
        scrollButton.classList.add("fade-out");
      }
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    const apiKey = process.env.REACT_APP_FINHUB_API_KEY;
    const interval = "D";

    axios
      .get(
        `https://finnhub.io/api/v1/stock/candle?symbol=${value}&resolution=${interval}&count=30&token=${apiKey}`
      )
      .then((response) => {
        setCharmData(response.data);
        console.log(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [value]);

  const chartData = {
    labels: charmData.t
      ? charmData.t.map((timestamp) => {
          const date = new Date(timestamp * 1000);
          const day = date.getDate().toString().padStart(2, "0");
          const month = (date.getMonth() + 1).toString().padStart(2, "0");
          const year = date.getFullYear();
          return `${day}/${month}/${year}`;
        })
      : [],

    datasets: [
      {
        label: "Stock Price",
        data: charmData.c || [],
        fill: true,

        borderColor: "rgba(75,192,192,1)",
        lineTension: 0.1,
      },
    ],
  };
  const chartOptions = {
    xAxes: {
      title: "time",
      gridThickness: 2,
      unit: "day",
      unitStepSize: 1000,
      type: "time",
      time: {
        displayFormats: {
          millisecond: "MMM DD",
          second: "MMM DD",
          minute: "MMM DD",
          hour: "MMM DD",
          day: "MMM DD",
          week: "MMM DD",
          month: "MMM DD",
          quarter: "MMM DD",
          year: "MMM DD",
        },
      },
    },
    ticks: {
      font: {
        size: 12,
        family: "Arial, sans-serif",
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: false,
        backgroundColor: "rgba(0,0,0,0.7)",
        titleFontColor: "#fff",
        bodyFontColor: "#fff",
      },
    },
  };
  const fetchMatchingCompanies = (searchTerm) => {
    const apiKey = process.env.REACT_APP_FINHUB_API_KEY;

    axios
      .get(`https://finnhub.io/api/v1/search?q=${searchTerm}&token=${apiKey}`)
      .then((response) => {
        setBestMatches(response.data.result || []);
        console.log("API Response:", response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching companies:", error);
        setLoading(false);
      });
  };
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onSearch = (searchTerm) => {
    console.log("search", searchTerm);
    setValue(searchTerm);
    fetchMatchingCompanies(searchTerm);
  };

  return (
    <div>
      <div className="header">
        <div className="left">
          <img src="/stock-logo.svg" alt="Stock Tracker Logo" />
          <h1>Stock Tracker</h1>
        </div>

        <button
          onClick={handleScrollToTop}
          className="scroll-to-top-button fade-out"
          id="scroll"
        >
          ↑
        </button>

        <div className="right">
          <Link to="/">
            <button>Return to Home</button>
          </Link>
        </div>
      </div>

      <div className="containerSearch">
        <input
          className="search-input"
          type="text"
          value={value}
          placeholder="Search stock.."
          onChange={onChange}
        ></input>

        <button className="search-button " onClick={() => onSearch(value)}>
          Search
        </button>
      </div>
      <div className="containerResults">
        {bestMatches
          .filter((item) => {
            const searchTerm = value.toLowerCase();
            const companyName = item.symbol.toLowerCase();
            return (
              searchTerm &&
              companyName.startsWith(searchTerm) &&
              companyName !== searchTerm
            );
          })
          .slice(0, 5)

          .map((item) => (
            <li
              className="itemsList"
              key={item.symbol}
              onClick={() => onSearch(item.symbol)}
            >
              {item.symbol}
            </li>
          ))}
      </div>

      <h2 className="companyName">{value}</h2>
      <div>
        <div className="graph">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <Line data={chartData} options={chartOptions} />
          )}
        </div>
      </div>

      <div className="calendar-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Charts;
