/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const NewsCard = ({news}) => {
    console.log(news)
    const{ title,img,thumbnail_url,details,_id,image_url}=news;
    return (
        <div >
            <div className="card p-4 mb-16 border-b-2 border-red-300 bg-base-100 shadow-xl">
            <h2 className="card-title">{title}</h2>
  <figure className="px-10 pt-10">
    <img src={image_url} alt="" />
  </figure>
  <div className="card-body items-center text-center">
  {
    details.length >200 ? <p> {details.slice(0,200) } <Link className=" font-bold text-blue-700" to={`/news/${_id}`} >read more.....</Link> </p> : 
    <p>{details}</p>
  }
    
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default NewsCard;