import './placeList.scss'

function PlaceList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "placeList active" : "placeList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  )
}

export default PlaceList
