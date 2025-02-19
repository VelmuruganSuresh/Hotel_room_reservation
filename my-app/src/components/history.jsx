import React, { useState } from "react";
import '../Histroy.css'

export let histroydata = [];

export default function History() {
  const [history, setHistory] = useState(histroydata);

  // Remove a booking
  const removeBooking = (index) => {
    const updatedHistory = history.filter((_, i) => i !== index);
    setHistory(updatedHistory);
  };

  return (
    <div className="history-container">
      <h1>Booking History</h1>

      {history.length === 0 ? (
        <p className="no-book">No bookings yet.</p>
      ) : (
        history.map((booking, index) => (
          <div key={index} className="history-card">
            <img src={booking.roomimage} alt={booking.roomName} className="history-img" />
            
            <div className="history-details">
              <h3>{booking.roomName}</h3>
              <p><strong>Location:</strong> {booking.location}</p>
              <p><strong>Guest Name:</strong> {booking.guestName}</p>
              <p><strong>Phone Number:</strong> {booking.countryCode} {booking.phoneNumber}</p>
              <p><strong>Country:</strong> {booking.country}</p>
              <p><strong>Check-in:</strong> {booking.checkIn}</p>
              <p><strong>Check-out:</strong> {booking.checkOut}</p>
              <p><strong>Number of Adults:</strong> {booking.adults}</p>
              <p><strong>Number of Children:</strong> {booking.children}</p>
              <p><strong>Age of Children:</strong> {booking.age || "N/A"}</p>
              <p><strong>Complementary Needs:</strong> {booking.complementary}</p>
              <p><strong>Stay Duration:</strong> {booking.stayDays} days</p>
              <p><strong>Price Range:</strong> {booking.roomPrice}</p>
              <button onClick={() => removeBooking(index)}>Cancel Booking</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
