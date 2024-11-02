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
import About from "../components/about/About";
import Equilibrium from "../components/equilibrium/Equilibrium";
import Ethics from "../components/ethics/Ethics";
import Careers from "../components/careers/Careers";
import Legal from "../components/legal/Legal";

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
        <Route path="/about" element={<About />} />
        <Route path="/equilibrium" element={<Equilibrium />} />
        <Route path="/ethics" element={<Ethics />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/corporate" element={<Legal />} />
        <Route path="/privacy" element={<Legal />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default Root;
