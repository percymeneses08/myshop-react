import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import './detail.css'

const Detail = ({ updateList }) => {
  const [data, setData] = useState(null)
  // const id = props.match.params.productId
  const { productId: id } = useParams()

  useEffect(_ => {
    fetchData()
  }, [])

  const fetchData = async _ => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const dataResponse = await response.json()
    setData(dataResponse)
  }

  if (!data) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <div className="detail">
      <figure className="detail__image__container">
        <img className="detail__image" src={data.image} alt="" />
      </figure>
      <div className="detail__text__container">
        <div>
          <h1>{data.title}</h1>
          <p>Product Description</p>
          <p>{data.description}</p>
          <p>{data.category}</p>
        </div>
        <button className="detail__button" onClick={_ => updateList(data)}>Add to cart</button>
      </div>
    </div>
  )
}

export default Detail