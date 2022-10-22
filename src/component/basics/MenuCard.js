import React from 'react'

const MenuCard = ({menuData}) => {
  // console.log(menuData);
  return (
    <>
    <section className="menuSection">
    {
      menuData.map((curElem) => {
        const {id, name, category, images, description } = curElem  // destructering data
        return (
          <>
          <div className="card-container" key={id}>
          <div className="card">
            <div className="card-body">
              <span className="card-number">{id}</span>
              <span className="card-author">{category}</span>
              <h2 className="card-title">{name}</h2>
              <span className="card-description">{description}</span>
              <div className="card-read">Read</div>
            </div>
            <img src={images} alt="images" className="card-media" />
            <span className="card-tag">Order Now</span>
          </div>
        </div>
        </>
        )
      })}
      </section>
    </>
   );    
}

export default MenuCard
