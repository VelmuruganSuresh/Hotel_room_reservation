import React, { useState } from "react";
import "../Booking.css";
import { histroydata } from "./history";

const hotels = {
  "Chennai": [
    { id: 1, name: "Single Room", price: "₹2000-10000", image: "https://images.unsplash.com/photo-1512918580421-b2feee3b85a6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNpbmdsZSUyMHJvb218ZW58MHx8MHx8fDA%3D" },
    { id: 2, name: "Double Room", price: "₹4500-15000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUiDJtGtIWXIQ0zWG_s8-Ouz0g9EcIuOPOQ&s" },
    { id: 3, name: "Suite", price: "₹10000-80000", image: "https://www.theparkhotels.com/images/site-specific/chennai/rooms-suites-min.jpg" },
    { id: 4, name: "Suite", price: "₹10000-80000", image: "https://www.theparkhotels.com/images/site-specific/chennai/rooms-suites-min.jpg" },
    { id: 5, name: "Suite", price: "₹10000-80000", image: "https://www.theparkhotels.com/images/site-specific/chennai/rooms-suites-min.jpg" },
    { id: 6, name: "Suite", price: "₹10000-80000", image: "https://www.theparkhotels.com/images/site-specific/chennai/rooms-suites-min.jpg" },
  ],
  "Mumbai": [
    { id: 7, name: "Single Room", price: "₹2200-10500", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2Iot5JJyz97ml-rEf6sdnuxWMH4Zj2KYDg&s" },
    { id: 8, name: "Double Room", price: "₹4800-16000", image: "https://static1.eskypartners.com/travelguide/twin-room-double-room-jaka-roznica.jpg" },
    { id: 9, name: "Suite", price: "₹11000-85000", image: "https://www.lottehotel.com/content/dam/lotte-hotel/lotte/yangon/accommodation/hotel/suite/royalsuite/180712-49-2000-acc-yangon-hotel.jpg.thumb.768.768.jpg" },
    { id: 10, name: "Suite", price: "₹11000-85000", image: "https://www.lottehotel.com/content/dam/lotte-hotel/lotte/yangon/accommodation/hotel/suite/royalsuite/180712-49-2000-acc-yangon-hotel.jpg.thumb.768.768.jpg" },
    { id: 11, name: "Suite", price: "₹11000-85000", image: "https://www.lottehotel.com/content/dam/lotte-hotel/lotte/yangon/accommodation/hotel/suite/royalsuite/180712-49-2000-acc-yangon-hotel.jpg.thumb.768.768.jpg" },
    { id: 12, name: "Suite", price: "₹11000-85000", image: "https://www.lottehotel.com/content/dam/lotte-hotel/lotte/yangon/accommodation/hotel/suite/royalsuite/180712-49-2000-acc-yangon-hotel.jpg.thumb.768.768.jpg" },
  ],
  "Cuddalore": [
    { id: 13, name: "Single Room", price: "₹1800-9000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA1AqjI6CMPNXW_qcuvUWLVXRMmHNWoY66EQ&s" },
    { id: 14, name: "Double Room", price: "₹4000-14000", image: "https://webbox.imgix.net/images/owvecfmxulwbfvxm/cfca3e26-3e33-4a69-8404-8e578394e12b.jpg?auto=format,compress&fit=crop&crop=entropy" },
    { id: 15, name: "Suite", price: "₹9500-75000", image: "https://plus.unsplash.com/premium_photo-1661962495669-d72424626bdc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjBzdWl0ZXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 16, name: "Suite", price: "₹9500-75000", image: "https://plus.unsplash.com/premium_photo-1661962495669-d72424626bdc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjBzdWl0ZXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 17, name: "Suite", price: "₹9500-75000", image: "https://plus.unsplash.com/premium_photo-1661962495669-d72424626bdc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjBzdWl0ZXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 18, name: "Suite", price: "₹9500-75000", image: "https://plus.unsplash.com/premium_photo-1661962495669-d72424626bdc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjBzdWl0ZXxlbnwwfHwwfHx8MA%3D%3D" },
  ],
  "Hyderabad": [
    { id: 19, name: "Single Room", price: "₹2500-11000", image: "https://www.trade4asia.com/catalougeimage/single-bed.png" },
    { id: 20, name: "Double Room", price: "₹5000-17000", image: "https://www.hotelgoldencrown.com/files/hotel/hotel-a/Standard.jpg" },
    { id: 21, name: "Suite", price: "₹12000-90000", image: "https://www.manila-hotel.com.ph/wp-content/uploads/2023/07/TMH_Presidential-Suite_Bedroom-1024x682.jpg" },
    { id: 22, name: "Suite", price: "₹12000-90000", image: "https://www.manila-hotel.com.ph/wp-content/uploads/2023/07/TMH_Presidential-Suite_Bedroom-1024x682.jpg" },
    { id: 23, name: "Suite", price: "₹12000-90000", image: "https://www.manila-hotel.com.ph/wp-content/uploads/2023/07/TMH_Presidential-Suite_Bedroom-1024x682.jpg" },
    { id: 24, name: "Suite", price: "₹12000-90000", image: "https://www.manila-hotel.com.ph/wp-content/uploads/2023/07/TMH_Presidential-Suite_Bedroom-1024x682.jpg" },
  ],
};
export default function Booking() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [displayedHotels, setDisplayedHotels] = useState(hotels["Chennai"]);
  const [formData, setFormData] = useState({
    location: "Chennai",
    checkIn: "",
    checkOut: "",
    adults: 1,
    children: 0,
    age: "",
    complementary: "No",
    stayDays: 1,
    roomName: "",
    roomPrice: "",
    roomimage: "",
    guestName: "",
    phoneNumber: "",
    country: "",
    countryCode: "+91"
  });

  const handleLocationClick = (city) => {
    setFormData({
      ...formData,
      location: city,
      checkIn: "",
      checkOut: "",
      adults: 1,
      children: 0,
      age: "",
      complementary: "No",
      stayDays: 1,
      roomName: "",
      roomPrice: "",
      roomimage: "",
      guestName: "",
      phoneNumber: "",
      country: "",
      countryCode: "+91"
    });
    setDisplayedHotels(hotels[city] || []);
    setSelectedHotel(null);
    setShowPopup(false);
  };

  const handleBookNow = (hotel) => {
    setSelectedHotel(hotel);
    setFormData({
      ...formData,
      roomName: hotel.name,
      roomPrice: hotel.price,
      roomimage: hotel.image
    });
    setShowPopup(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.checkIn === "" || 
      formData.checkOut === "" || 
      formData.guestName.trim() === "" || 
      formData.phoneNumber.trim() === "" || 
      formData.country === "" ||
      formData.adults < 1 || 
      formData.stayDays < 1
    ) {
      alert("Please fill in all required fields before submitting!");
      return;
    }
    console.log("Form Submitted:", formData);
    histroydata.push(formData);
    setShowPopup(false);
  };

  return (
    <div className="booking-container">
      <h2>Select Your Location</h2>
      <div className="location-buttons">
        {["Chennai", "Mumbai", "Cuddalore", "Hyderabad"].map((city) => (
          <button key={city} className={formData.location === city ? "selected" : ""} onClick={() => handleLocationClick(city)}>
            {city}
          </button>
        ))}
      </div>
      {displayedHotels.length > 0 && (
        <div className="hotel-con">
          <h2>Available Rooms in {formData.location}</h2>
          <div className="hotel-list">
            {displayedHotels.map((hotel) => (
              <div key={hotel.id} className="hotel-card">
                <img src={hotel.image} alt={hotel.name} />
                <h3>{hotel.name}</h3>
                <p>Price Range: {hotel.price}</p>
                <button className="book-btn" onClick={() => handleBookNow(hotel)}>Book Now</button>
              </div>
            ))}
          </div>
        </div>
      )}
      {showPopup && selectedHotel && (
        <div className="popup">
          <button className="close-btn" onClick={() => setShowPopup(false)}>✖</button>
          <div className="popup-content">
            <h3>Book {selectedHotel.name}</h3>
            <form onSubmit={handleSubmit}>
              <label>Guest Name:</label>
              <input type="text" name="guestName" required value={formData.guestName} onChange={(e) => setFormData({ ...formData, guestName: e.target.value })} />
              
              <label>Phone Number:</label>
              <input type="tel" name="phoneNumber" required value={formData.phoneNumber} placeholder="+91" onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} />
              
              <label>Country:</label>
              <select name="country" required value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })}>
                <option value="">Select Country</option>
                {["India", "USA", "UK", "Australia", "Canada", "Germany", "France", "Japan", "China", "Brazil"].map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
              
              <label>Check-in Date:</label>
              <input type="date" name="checkIn" required value={formData.checkIn} onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })} />
              
              <label>Check-out Date:</label>
              <input type="date" name="checkOut" required value={formData.checkOut} onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })} />
              
              <label>Number of Adults:</label>
              <input type="number" name="adults" min="1" required value={formData.adults} onChange={(e) => setFormData({ ...formData, adults: e.target.value })} />
              
              <label>Number of Children:</label>
              <input type="number" name="children" min="0" required value={formData.children} onChange={(e) => setFormData({ ...formData, children: e.target.value })} />
              
              <label>Complementary Needs:</label>
              <select name="complementary" required value={formData.complementary} onChange={(e) => setFormData({ ...formData, complementary: e.target.value })}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
              
              <label>How Many Days Do You Want to Stay?</label>
              <input type="number" name="stayDays" min="1" required value={formData.stayDays} onChange={(e) => setFormData({ ...formData, stayDays: e.target.value })} />
              
              <button type="submit">Confirm Booking</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}


