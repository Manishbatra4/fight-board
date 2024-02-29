import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { timeFormatter } from "../helper";
import { fetchFlightDetails } from "../services";

const FlightDetails = () => {
  const { id } = useParams();
  const [flightDetails, setFlightDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFlightDetails(id);
      setFlightDetails(data);
    };

    fetchData();
  }, [id]);

  return (
    <>
      <div className="detail">
        <div className="back">
          <svg
            style={{ height: "25px", width: "25px" }}
            dataSlot="icon"
            fill="none"
            strokeWidth={1.5}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          <Link to="/">Back</Link>
        </div>

        <h2>Flight Details</h2>
        {flightDetails ? (
          <table>
            <tbody>
              <tr>
                <th>Flight Number:</th>
                <td>{flightDetails.flightNumber}</td>
              </tr>
              <tr>
                <th>Airline:</th>
                <td>{flightDetails.airline}</td>
              </tr>
              <tr>
                <th>Origin:</th>
                <td>{flightDetails.origin}</td>
              </tr>
              <tr>
                <th>Destination:</th>
                <td>{flightDetails.destination}</td>
              </tr>
              <tr>
                <th>Departure Time:</th>
                <td>{timeFormatter(flightDetails.departureTime)}</td>
              </tr>
              <tr>
                <th>Status:</th>
                <td>{flightDetails.status}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default FlightDetails;
