import RestuarntCardContainer from "./RestuarntCardContainer";
import restaurantRes from "../utils/mockData";
import {useState} from "react";

const Body = () => {
  const [listOfRestuarnts, setListOfResturant] = useState(restaurantRes);
  return (
    <div className="res-conatiner">
      <div className="filter-button">
        <button type="button" className="filter" onClick={
            () => {
                const filterList = listOfRestuarnts.filter((res) => res.info.avgRating > 4.2);
                setListOfResturant(filterList)
            }}>
                Top Rated Resturant
        </button>
      </div>
      <div className="res-card-container">
        {listOfRestuarnts.map((res) => (
          <RestuarntCardContainer key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
