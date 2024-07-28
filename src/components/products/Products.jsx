import React from 'react'
import { useLocation } from 'react-router-dom'
import collection from '../../redux/collection'
import { collectioncardconstants } from '../../constants/componentsContants/collection/collection'
import Product from './product/Product'
import Nav from '../navbars/blackNavbar/Nav'
import FootNav from '../footNav/FootNav'
import { useSelector } from 'react-redux'

const Products = () => {
  const collection = useSelector(store => store.collection.value)
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    // const lists = collectioncardconstants.filter((v) => v.id == id);
    const lists = collection.filter((v) => v.id == id);

  return (
    <>
      {/* <Nav /> */}
      <Product list={lists} />
      <FootNav />
    </>
  );
}

export default Products