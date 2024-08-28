import RestuarntCardContainer from "./RestuarntCardContainer";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CARD_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestuarnts, setListOfResturant] = useState([]);
  const [filterResturants, setfilterResturants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const [searchText, setSearchText] = useState("");
  const fetchData = async () => {
    const response = await fetch(CARD_URL);
    const json = await response.json();
    console.log("---json---", json);
    setListOfResturant(
      json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterResturants(
      json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>You are Offline Please check Internet Connection</h1>;

  return listOfRestuarnts?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="res-conatiner">
      <div className="filter-button flex">
        <div className="search-section m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            type="button"
            className="px-4 py-2 m-4 bg-green-100 rounded-lg"
            onClick={() => {
              const filterListRest = listOfRestuarnts.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilterResturants(filterListRest);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4">
          <button
            type="button"
            className="px-2 py-2 m-4 bg-gray-100 rounded-lg"
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
      </div>
      <div className="flex flex-wrap">
        {filterResturants?.map((res) => (
          <Link key={res.info.id} to={"restaurant/" + res.info.id}>
            <RestuarntCardContainer resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
