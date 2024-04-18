import React from "react";


const ListingCard = ({title,article,btnText,icon,isHomePage}) => {
  return (
    <>
      <div class="card">
        <div class="card-body">
        <h5 class="card-title text-start">{icon} {title}</h5>
          <p class="card-text text-start">
            {article}
          </p>
          {isHomePage && (
            <a href="#" className="btn text-purple btn-outline-primary text-start">
              {btnText}
            </a>
          )}
        
        </div>
      </div>
    </>
  );
};

export default ListingCard;
