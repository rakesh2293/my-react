import { CDN_URL } from "../utils/constants";

const RestuarntCardContainer = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating,sla } = resData?.info;
  return (
    <div className="card-detail">
      <div className="card-header">
        <img
          className="res-image"
          src={CDN_URL + cloudinaryImageId}
          alt="res-image"
        />
      </div>
      <div className="card-body">
        <h2>{name}</h2>
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
