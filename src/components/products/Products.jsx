import React from 'react'
import { useLocation } from 'react-router-dom'
import collection from '../../redux/collection'
import { collectioncardconstants } from '../../constants/componentsContants/collection/collection'
import Product from './product/Product'
import Nav from '../navbars/blackNavbar/Nav'
import FootNav from '../footNav/FootNav'

const Products = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const a = []
    const lists = collectioncardconstants.filter(v=>v.id==id)
    console.log(lists, id);

    const isLoading = () => {
        return (
          <>
            <Nav />
            <Product list={lists} />
          </>
        );
    }
  return (
    <>
      <Nav />
      <Product list={lists} />
      <FootNav />
    </>
  );
}

export default Products