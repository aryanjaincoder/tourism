import './hotel.scss'
import SearchBar from '../searchbar/SearchBar'

function Hotel() {
  return (
    <div className="homePage" id='booking'>
    <div className="textContainer">
      <div className="wrapper">
        <h1 className="title">Book Your Ideal Hotel Stay: Affordable, Convenient, and Easy</h1>
        <p>
        Explore the charm of Bundelkhand with comfortable stays at our handpicked hotels. Enjoy affordable luxury, exceptional hospitality, and convenient locations near major attractions. Experience the rich history and culture of Bundelkhand effortlessly
        </p>
        <SearchBar />
        <div className="boxes">
          <div className="box">
            <h1>Affordable</h1>
            <h2>Prices & Facilities</h2>
          </div>
          <div className="box">
            <h1>Best</h1>
            <h2>For You & Your Family</h2>
          </div>
          <div className="box">
            <h1>2000+</h1>
            <h2>Hotels</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="imgContainer">
      <img src="/bg.png" alt="" />
    </div>
  </div>
  )
}

export default Hotel
