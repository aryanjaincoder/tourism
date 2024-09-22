import './hotelList.scss'

function HotelList() {
  const data = [
    {
      id: 1,
      name: "Hotel Ambience",
      title: "Developer",
      img:
        "https://www.bundelkhandriverside.com/wp-content/uploads/2022/06/515A0745-1024x683.jpg",
      icon: "assets/twitter.png",
      link: "https://www.skyscanner.co.in/hotels/india/jhansi-hotels/hotel-ambience/ht-154567692?checkin=2024-09-28&checkout=2024-09-29&rooms=1&adults=2&clicked_details_price=1482&correlation_id=51dbff5a-80e9-4ddf-9a23-2904aa803cbc&currency=INR&impression_id=641920a5-4bfc-4846-b79c-d966225ebdee&locale=en-GB&market=IN&priceType=price-per-night&search_cycle_id=5e9b41177d2038e1026c5befcb96927c45ee03552e4b1df0c97fa017efac0eb0&search_entity_id=154712632&source=GoogleHpa",
      desc:
        "Stay in the heart of Bundelkhand, where modern comfort meets historical charm. Enjoy exceptional service, authentic cuisine, and scenic views",
    },
    {
      id: 2,
      name: "Sunrise Hotel",
      title: "Developer",
      img:
        "https://content.skyscnr.com/available/975624623/975624623_960x576.jpg",
      icon: "assets/youtube.png",
      link: "https://www.skyscanner.co.in/hotels/india/jhansi-hotels/sunrise-hotel/ht-154712632?checkin=2024-09-28&checkout=2024-09-29&rooms=1&adults=2&clicked_details_price=1785&correlation_id=51dbff5a-80e9-4ddf-9a23-2904aa803cbc&currency=INR&impression_id=641920a5-4bfc-4846-b79c-d966225ebdee&locale=en-GB&market=IN&priceType=price-per-night&search_cycle_id=5e9b41177d2038e1026c5befcb96927c45ee03552e4b1df0c97fa017efac0eb0&search_entity_id=154712632&source=GoogleHpa",
      desc:
        "Experience Bundelkhand’s rich heritage with luxurious stays, modern amenities, authentic cuisine, and personalized service at our heritage hotel",
      
    },
    {
      id: 3,
      name: "Hotel k3 Club",
      title: "Developer",
      img:
        "https://content.skyscnr.com/available/1646314724/1646314724_960x576.jpg",
      icon: "assets/linkedin.png",
      link: "https://www.skyscanner.co.in/hotels/india/jhansi-hotels/hotel-k3-club-residency/ht-203870406?checkin=2024-09-28&checkout=2024-09-29&rooms=1&adults=2&clicked_details_price=1856&correlation_id=51dbff5a-80e9-4ddf-9a23-2904aa803cbc&currency=INR&impression_id=641920a5-4bfc-4846-b79c-d966225ebdee&locale=en-GB&market=IN&priceType=price-per-night&search_cycle_id=5e9b41177d2038e1026c5befcb96927c45ee03552e4b1df0c97fa017efac0eb0&search_entity_id=154712632&source=GoogleHpa",
     
      desc:
        "Discover Bundelkhand’s history and culture with our comfortable rooms, modern amenities, local cuisine, and exceptional hospitality.",
    },
    {
      id: 4,
      name: "Hotel Shrinath Palace",
      title: "Developer",
      img:
        "https://content.skyscnr.com/available/1359482175/1359482175_960x576.jpg",
      icon: "assets/linkedin.png",
      link: "https://www.skyscanner.co.in/hotels/india/jhansi-hotels/hotel-shrinath-palace/ht-134590881?checkin=2024-09-28&checkout=2024-09-29&rooms=1&adults=2&clicked_details_price=1559&correlation_id=51dbff5a-80e9-4ddf-9a23-2904aa803cbc&currency=INR&impression_id=641920a5-4bfc-4846-b79c-d966225ebdee&locale=en-GB&market=IN&priceType=price-per-night&search_cycle_id=5e9b41177d2038e1026c5befcb96927c45ee03552e4b1df0c97fa017efac0eb0&search_entity_id=154712632&source=GoogleHpa",
      desc:
        "Unwind in Bundelkhand with cozy accommodations, modern amenities, traditional cuisine, and warm hospitality, all near stunning historic sites.",
    },
  ];
  return (
    <div className="hotelList" id="hotels">
    <h1>Hotels For You</h1>
    <div className="container">
      {data.map((d) => (
        <a href={d.link}>
          
        <div className="card">
          <div className="top">
            
            <img
              className="user"
              src={d.img}
              alt=""
            />
            
          </div>
          <div className="center">
            {d.desc}
          </div>
          <div className="bottom">
            <h3>{d.name}</h3>
            
          </div>
        </div>
        </a>
      ))}
    </div>
  </div>
  )
}

export default HotelList
