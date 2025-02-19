import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "../Home.css";

const trendingCity = [
  { id: 1, name: "Delhi", image: "https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=" },
  { id: 2, name: "Bangalore", image: "https://static.toiimg.com/photo/54559212.cms" },
  { id: 3, name: "Mumbai", image: "https://www.andbeyond.com/wp-content/uploads/sites/5/Chhatrapati-Shivaji-Terminus-railway-station-mumbai.jpg" },
  { id: 4, name: "Chennai", image: "https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=" },
  { id: 5, name: "Hyderabad", image: "https://www.formulaindia.com/blog/wp-content/uploads/2021/07/hyd1.jpg" },
  { id: 6, name: "Cuddalore", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNarugm7eugEAk0jgq0X69AbM03_hKktXbag&s" },
];

const rooms = [
  { id: 1, type: "Single Room", price: "1000-5000", image: "https://images.mrandmrssmith.com/images/1482x988/3630546-amandayan-lijang-china.jpg" },
  { id: 2, type: "Double Room", price: "1500-7000", image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/358172712.jpg?k=d106178483db7861be47074ceeeaea0afe1855849e15f85d6e50231608b2557e&o=&hp=1" },
  { id: 3, type: "Suite", price: "2500-10000", image: "https://techcrunch.com/wp-content/uploads/2016/12/dream-presidential-suite-terrace.jpg" },
];

const properties = [
  {
    id: 1,
    name: "Agriturismo Cabrele",
    location: "Italy, Santorso",
    rating: 9.4,
    reviews: 291,
    price: 9206,
    image: "https://images.luxuryescapes.com/q_auto:best,dpr_2.0/ky8oxwyu4et2iaamy63q",
  },
  {
    id: 2,
    name: "Mini Hotel Übernachten Im Gurkenfass",
    location: "Germany, Lübbenau",
    rating: 7.9,
    reviews: 181,
    price: 7292,
    image: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/11/08140013/Feature-Goa-Marriott-Resort-Spa.jpg?tr=w-1200,q-60",
  },
  {
    id: 3,
    name: "Carinya Park",
    location: "Australia, Gembrook",
    rating: 9.4,
    reviews: 32,
    price: 14863,
    image: "https://media.cntraveller.in/wp-content/uploads/2022/01/Finolhu-Maldives.jpeg",
  },
  {
    id: 4,
    name: "Carinya Park",
    location: "Australia, Gembrook",
    rating: 9.4,
    reviews: 32,
    price: 14863,
    image: "https://www.planetware.com/wpimages/2020/07/world-best-luxury-all-inclusive-resorts-four-seasons-tented-camp-golden-triangle-thailand.jpg",
  },
  {
    id: 5,
    name: "Carinya Park",
    location: "Australia, Gembrook",
    rating: 9.4,
    reviews: 32,
    price: 14863,
    image: "https://img.traveltriangle.com/blog/wp-content/uploads/2021/10/Luxury-resorts-in-the-world.jpg",
  },
  {
    id: 6,
    name: "Carinya Park",
    location: "Australia, Gembrook",
    rating: 9.4,
    reviews: 32,
    price: 14863,
    image: "https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2018/02/HAYMAN-ISLAND-GREAT-BARRIER-REEF-AUSTRALIA.jpg?ssl=1",
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="con">
      <h1 className="h">Trending Cities</h1>
      <div className="city-grid">
        {trendingCity.map((city) => (
          <div key={city.id} className="room-card" onClick={() => navigate(`/booking`)}>
            <img src={city.image} alt={city.name} className="trendingcitys" />
            <div className="city-name">
              {city.name} <img src="https://flagcdn.com/w40/in.png" alt="India" width="16" />
            </div>
          </div>
        ))}
      </div>

      <h1>Available Rooms</h1>
      <div className="rooms-grid">
        {rooms.map((room) => (
          <div key={room.id} className="room-card" onClick={() => navigate(`/booking`)}>
            <img src={room.image} alt={room.type} className="room-image" />
            <h3>{room.type}</h3>
            <p>Price: ₹{room.price}</p>
          </div>
        ))}
      </div>

      <div className="unique-properties-container">
        <h2>Stay at our top unique properties</h2>
        <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
         navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
         loop={true}
        breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
  }}
>
  {properties.map((property) => (
    <SwiperSlide key={property.id}>
      <div className="property-card">
        <img src={property.image} alt={property.name} />
        <div className="property-details">
          <h3>{property.name}</h3>
          <p>{property.location}</p>
          <div className="rating">
          </div>
         
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
      </div>
    </div>
  );
}