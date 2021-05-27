import React from 'react'

const Header = ({ list }) => {
  console.log(list)
  return (
    <div>
      <header style={{
        display: "flex",
      }}>
        <h1 style={{
          margin: "20px auto",
        }}>My Shop</h1>
      </header>
      <section style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: 'center',
        padding: "0 38px"
      }}>
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
          height: "min-content"
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
            <p>4</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Header