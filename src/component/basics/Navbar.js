import React from 'react'

function Navbar({filterItem, menuList}) {
  return (
    <>
    <nav className="navbar">
    <div className="btn-group">
      {
        menuList.map((curElem) =>{
          return (<>
                <button className="btn-group_item" onClick={() =>filterItem(curElem)}>{curElem}</button>
                {/* <button className="btn-group_item" onClick={() =>setmenuItem(Menu)}>All</button> */}
              </>
              )
        })
      }
    </div>
  </nav>
    </>
  )
}

export default Navbar
