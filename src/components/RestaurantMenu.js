import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenuApi();
  }, []);

  const fetchMenuApi = async () => {
    const resposne = await fetch(MENU_URL + resId);
    const json = await resposne.json();
    setresInfo(json);
  };
  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card;
  return (
    <div className="res-menu-container">
      <h1>{name}</h1>
      <p className="res-menu-check">
        {cuisines.join(",")}: {costForTwoMessage}
      </p>
      <h3>Menu:</h3>
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card.info?.id}>{item?.card.info?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
