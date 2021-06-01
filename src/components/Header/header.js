import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PopUp from '../PopUp/popup'

const Header = ({ list }) => {
  const [activeClass, setActiveClass] = useState('hidden')

  const changeActiveClass = _ => {
    if (activeClass === 'hidden') {
      setActiveClass('show')
    } else {
      setActiveClass('hidden')
    }
  }

  return (
    <div>
      <header style={{
        display: "flex",
      }}>
        <Link to="/products" style={{
          margin: "20px auto",
          color: "black",
          textDecoration: "none",
          fontSize: "30px"
        }}>My Shop</Link>
      </header>
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: 'center',
          padding: "0 38px"
        }}
        onClick={changeActiveClass}
      >
        <div style={{
          display: "flex",
          alignItems: "center"
        }}>
          <figure style={{
            border: "2px solid black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 20px"
          }}>
            <span>Logo</span>
          </figure>
          <p>Products</p>
        </div>
        <div style={{
          border: "2px solid black",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: "5px 10px",
          height: "min-content",
          position: 'relative',
          cursor: 'pointer'
        }}>
          <figure style={{
            border: "2px solid black",
            margin: '0'
          }}>
            <span>Cart Icon</span>
          </figure>
          <div style={{
            border: "2px solid black",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            display: 'flex',
            justifyContent: "center",
            alignItems: 'center',
            marginLeft: '13px'
          }}>
            {/* <p>4</p> */}
            <p>{list.length}</p>
          </div>
          <PopUp activeClass={activeClass} list={list} />
        </div>
      </section>
    </div>
  )
}

export default Header