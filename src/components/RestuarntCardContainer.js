import { CDN_URL } from "../utils/constants";

const RestuarntCardContainer = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating,sla } = resData?.info;
  return (
    <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-100">
      <div className="card-header">
        <img
          className="rounded-lg h-28 w-[200px]"
          src={CDN_URL + cloudinaryImageId}
          alt="res-image"
        />
      </div>
      <div className="card-body">
        <h2 className="font-bold py-2 text-lg text-orange-400">{name}</h2>
        <p>Ratings:{avgRating}</p>
        <p>Delvery Time:{sla?.slaString}</p>
        <p></p>
      </div>
      <div className="card-fotter">
        <h4>{cuisines.join(", ")}</h4>
      </div>
    </div>
  );
};

export default RestuarntCardContainer;
