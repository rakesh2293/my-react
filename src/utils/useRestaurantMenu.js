import { MENU_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchMenuApi();
  },[]);

  const fetchMenuApi = async () => {
    const resposne = await fetch(MENU_URL + resId);
    const json = await resposne.json();
    setresInfo(json);
  };
  return resInfo;
};

export default useRestaurantMenu;
