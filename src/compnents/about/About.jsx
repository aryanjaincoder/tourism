import './about.scss'
import { useState } from "react";

function About() {
    const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "purpose.png",
      title: "Our purpose is to...",
      desc:
        "Promote Bundelkhand's cultural heritage and scenic beauty through an engaging website, attracting travelers with easy access to travel info and hidden gems. ",
      img:
        "poster.png",
    },
    {
      id: "2",
      icon: "globe.png",
      title: "Our marketing stratergy is...",
      desc:
        "Social media campeigns , travel vlogs , and influencers. Special packages for heritage and adventures tours. Organise cultural festivals to attract tourists",
      img:
        "marketing.png",
    },
    {
      id: "3",
      icon: "writing.png",
      title: "Adventure and Ecotourism",
      desc:
        "Opportunities for : Wildlife Safaries , Trekking in Bundelkhand ranges , Boating and water sports in the Betwa River",
      img:
        "adventure.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="about" id="about">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                 
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  )
}

export default About
