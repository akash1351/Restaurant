import React from 'react'

const MenuCard = ({menuData}) => {
  return (
    <>
    <section className="main-card--cointainer">
    {menuData.map((curElem)=>{
        const {id,image,name,category,description}=curElem
        return (
            <>
            <div className="card-container" key={id}>
            <div className="card">
              <div className="card-body">
                <span className="card-number card-circle subtle">{id}</span>
                <span className="card-author subtle">{category}</span>
                <h2 className="card-title">{name}</h2>
                <span className="subtle card-description">
                  {description}
                </span>
                <div className="card-read">Read</div>
              </div>
              <img src={image} alt="images" className="card-media img-size"/>
              <span className="card-tag subtle">Order Now</span>
              </div>
            </div>
            </>
        );
        })}
    </section>
    </>
  );
};

export default MenuCard;
