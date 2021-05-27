import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { AuthProvider } from './Auth'
import Layout from './components/Layout/layout'
import Detail from './components/Detail/detail'

import logo from './logo.svg';
import './App.css';

import Home from './pages/Home/home'

function App() {
  const list = []

  function updateList(item) {
    list.push(item)
    console.log(list)
  }

  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Layout list={list}>
            <Route exact path="/products">
              <Home updateList={updateList} />
            </Route>
            <Route exact path="/products/details/:productId" component={Detail}></Route>
          </Layout>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
