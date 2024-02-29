import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { timeFormatter } from "../helper";
import { fetchFlights } from "../services";

const FlightTable = () => {
  const history = useHistory();
  const [flights, setFlights] = useState([]);

  const timeInterval = 5000;

  useEffect(() => {
    const getData = async () => {
      const flights = await fetchFlights();
      setFlights(flights);
    };

    getData();

    const interval = setInterval(() => {
      getData();
    }, timeInterval);

    return () => clearInterval(interval);
  }, []);

  const handleRowClick = (id) => {
    history.push(`/flight/${id}`);
  };

  return (
    <div>
      <h1>Flight Status Board</h1>
      <table>
        {/* Flight table headers */}
        <thead className="tbl-header">
          <tr>
            <th>Flight Number</th>
            <th>Airline</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Departure Time</th>
            <th>Status</th>
          </tr>
        </thead>
        {/* Flight data */}
        <tbody className="tbl-content">
          {flights.map((flight) => (
            <tr
              className="tbl-row"
              key={flight.id}
              onClick={() => handleRowClick(flight.id)}
            >
              <td>{flight.flightNumber}</td>
              <td>{flight.airline}</td>
              <td>{flight.origin}</td>
              <td>{flight.destination}</td>
              <td>{timeFormatter(flight.departureTime)}</td>
              <td>{flight.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightTable;
