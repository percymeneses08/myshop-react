import React, { useState, useEffect } from 'react'

import Products from '../../components/Products/products'

const Home = ({ updateList }) => {
  return (
    <div>
      <Products updateList={updateList} />
    </div>
  )
}

export default Home