import React, { useContext } from 'react'
import { AuthContext } from '../../Auth'

const Products = ({ updateList }) => {
  let data = useContext(AuthContext).data
  console.log(data[0])
  data = Object.entries(data)

  return (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {
          data.map(item => {
            return (
              <div style={{
                margin: '0 10px 20px 10px',
                paddingBottom: '10px',
                border: '2px solid black',
                width: '200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <figure style={{
                    width: '90%',
                    height: "100px"
                  }}>
                    <img style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }} src={item[1].image} alt="" />
                  </figure>
                  <h2 style={{
                    width: '150px',
                    fontSize: '16px'
                  }}>{item[1].title}</h2>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  width: '100%'
                }}>
                  <p>{item[1].price}</p>
                  <button
                    style={{
                      backgroundColor: 'white',
                      height: '40px',
                      width: '100px',
                      cursor: 'pointer'
                    }}
                    onClick={_ => updateList(item[1].id)}
                  >Add to cart</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Products