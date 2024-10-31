import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Singin from "../components/accounts/signin/Singin";
import Singup from "../components/accounts/signup/Signup";
import Account from "../components/accounts/account/Account";
import Mens from "../components/collection/mens/Mens";
// import Product from "../components/products/Products";
import Products from "../components/products/Products";
import PaymentForm from "../components/pay/Payment";
import Faqs from "../components/faqs/Faqs";
import SiteMap from "../components/sitemap/SiteMap";
import Unsubscribe from "../components/unsubscribe/Unsubscribe";

const Root = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<Singin />} />
        <Route path="/collection" element={<Mens />} />
        <Route path="/pay" element={<PaymentForm />} />
        <Route path="/collection/:id" element={<Products />} />
        <Route path="/account" element={<Account />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="//sitemap" element={<SiteMap />} />
        <Route path="/unsubscribe" element={<Unsubscribe />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default Root;
