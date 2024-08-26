import RestuarntCardContainer from "./RestuarntCardContainer";
import restaurantRes from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestuarnts, setListOfResturant] = useState([]);
  // https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
      // Assuming you have a state variable to set the list of restaurants
      setListOfResturant(json);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  return (
    <div className="res-conatiner">
      <div className="filter-button">
        <button
          type="button"
          className="filter"
          onClick={() => {
            const filterList = listOfRestuarnts.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListOfResturant(filterList);
          }}
        >
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
