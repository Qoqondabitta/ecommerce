import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Singin from '../components/accounts/signin/Singin'
import Account from '../components/accounts/account/Account'

const Root = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<Singin />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </div>
  );
}

export default Root