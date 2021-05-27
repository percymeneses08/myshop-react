import React from 'react'

import Header from '../Header/header'

const Layout = ({ children }, list) => {
  console.log(list)
  return (
    <div>
      <Header list={list} />
      {children}
    </div>
  )
}

export default Layout