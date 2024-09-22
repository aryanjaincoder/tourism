import { useEffect, useState } from "react";

import "./places.scss";
import {
  monuments,
  temples,
  nationalParks,
  
  others,
  rivers
} from "../../data";

import PlaceList from "../placeList/PlaceList";


function Places() {
  const [selected, setSelected] = useState("monuments");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "monuments",
      title: "Monuments",
    },
    {
      id: "temples",
      title: "Temples",
    },
    {
      id: "nationalParks",
      title: "National Parks",
    },
    {
      id: "rivers",
      title: "Rivers",
    },
    {
      id: "others",
      title: "Others",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "monuments":
        setData(monuments);
        break;
      case "temples":
        setData(temples);
        break;
      case "nationalParks":
        setData(nationalParks);
        break;
      case "others":
        setData(rivers);
        break;
      case "rivers":
        setData(others);
        break;
      default:
        setData(monuments);
    }
  }, [selected]);
  return (
    <div className="places" id="places">
      <h1>Popular in Bundelkhand</h1>
      <ul>
        {list.map((item) => (
          <PlaceList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Places;
