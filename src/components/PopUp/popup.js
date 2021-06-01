import React from 'react'

import './popup.css'

const PopUp = ({ activeClass, list }) => {
  let totalPrice = 0
  for (let i = 0; i < list.length; i++) {
    totalPrice += list[i].price
  }

  return (
    <div className={`popup ${activeClass}`}>
      <h1>Shop cart list</h1>
      <ul className="popup__list">
        {
          list.map(item => {
            return (
              <li key={`${item.id}-shop-popup`} className="popup__list__item">
                <h2 className="popup__list__item__text">{item.title}</h2>
                <h2 className="popup__list__item__text">{item.price}</h2>
              </li>
            )
          })
        }
      </ul>
      <h3 className="popup__totalPrice">{totalPrice.toFixed(2)}</h3>
    </div>
  )
}

export default PopUp