import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Charts.css";
import { searchdates, companyDates } from "../src/constants/datesCompany";
import axios from "axios";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

function Charts() {
  const [bestMatches, setBestMatches] = useState(searchdates.result);
  const [charmData, setCharmData] = useState({});
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("");

  useEffect(() => {
    // const apiKey = "ck0lj1hr01qtrbkm4og0ck0lj1hr01qtrbkm4ogg";
    const apiKey = "ck0lj1hr01qtrbkm4og0ck0lj1hr01qtrbkm4ogg";
    //const candlesApiUrl = `https://finnhub.io/api/v1/stock/candle?symbol=AAPL&resolution=1&from1693752546&token=${apiKey}`;
    //const symbol = "AAPL"; // Replace with the stock symbol you want to fetch data for
    const interval = "D"; // Adjust the interval as needed (D for daily)

    axios
      .get(
        //`https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=${interval}&count=30&token=${apiKey}`
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
  }, [value]);

  const chartData = {
    labels: charmData.t || [],

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
    maintainAspectRatio: false,
    options: {
      scales: {
        x: {
          type: "time",
          time: {
            unit: "day", // Set the unit to 'day'
            tooltipFormat: "d-MM-yyyy", // Format for the tooltip
            displayFormats: {
              day: "d-MM-yyyy", // Format for day/month/year
            },
          },
        },
      },
    },
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onSearch = (searchTerm) => {
    console.log("search", searchTerm);
    setValue(searchTerm);
  };

  return (
    <div>
      <div className="header">
        <div className="left">
          <img src="/stock-logo.svg" alt="Stock Tracker Logo" />
          <h1>Stock Tracker</h1>
        </div>

        <button className="scroll-to-top-button fade-out" id="scroll">
          ↑
        </button>

        <div className="right">
          <Link to="/">
            <button>Return to Home</button>
          </Link>
        </div>
      </div>
      <div>
        <h2>{companyDates.name}</h2>
        <input
          type="text"
          value={value}
          placeholder="Search stock.."
          onChange={onChange}
        ></input>

        <button onClick={() => onSearch(value)}>Search</button>
        <div>
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

            .map((item) => (
              <li key={item.symbol} onClick={() => onSearch(item.symbol)}>
                {item.symbol}
              </li>
            ))}
        </div>
      </div>

      <div>
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <Line data={chartData} options={{ chartOptions }} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Charts;