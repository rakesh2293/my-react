
import RestuarntCardContainer from "./RestuarntCardContainer";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestuarnts, setListOfResturant] = useState([]);
  const [filterResturants, setfilterResturants] =useState([])
  useEffect(() => {
    fetchData();
  }, []);
  const [searchText, setSearchText] = useState("");
  const fetchData = async() => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    setListOfResturant(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilterResturants(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  return listOfRestuarnts?.length === 0 ? <Shimmer/> : (
    <div className="res-conatiner">
      <div className="filter-button">
        <div className="search-section">
          <input type="text" className="search-text" value={searchText} onChange={(e)=> {
            setSearchText(e.target.value)
          }} />
          <button type="button" className="search-button" onClick={() => {
            const filterListRest = listOfRestuarnts.filter(
              (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilterResturants(filterListRest);
          }}>Search</button>
        </div>
        <button
          type="button"
          className="filter"
          onClick={() => {
            const filterList = listOfRestuarnts.filter(
              (res) => res.info.avgRating > 4.2
            );
            setfilterResturants(filterList);
          }}
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="res-card-container">
        {filterResturants?.map((res) => (
          <Link key={res.info.id} to ={"restaurant/" + res.info.id}><RestuarntCardContainer resData={res} /></Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;
