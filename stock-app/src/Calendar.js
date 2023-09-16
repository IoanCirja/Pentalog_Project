import React, { useState, useEffect } from "react";
import axios from "axios";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CustomCalendar() {
  const [calendarData, setCalendarData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_FINHUB_API_KEY;
    const calendarApiUrl = `https://finnhub.io/api/v1/fda-advisory-committee-calendar?token=${apiKey}`;

    axios
      .get(calendarApiUrl)
      .then((response) => {
        const calendarEventData = response.data;
        setCalendarData(calendarEventData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching calendar data:", error);
        setLoading(false);
      });
  }, []);

  const eventDates = calendarData.map(event => new Date(event.fromDate));

  return (
    <div>
      <h2>Calendar Data</h2>
      {loading ? (
        <p>Loading calendar data...</p>
      ) : (
        <div>
          <Calendar
            value={eventDates}
            tileContent={({ date }) => {
              const eventForDate = calendarData.find(event => {
                const eventDate = new Date(event.fromDate);
                return eventDate.getDate() === date.getDate() &&
                  eventDate.getMonth() === date.getMonth() &&
                  eventDate.getFullYear() === date.getFullYear();
              });

              return eventForDate ? (
                <div style={{ textAlign: 'center' }}>
                  {eventForDate.eventDescription}
                </div>
              ) : null;
            }}
          />
        </div>
      )}
    </div>
  );
}

export default CustomCalendar;
