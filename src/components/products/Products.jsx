import React from 'react'
import { useLocation } from 'react-router-dom'
import collection from '../../redux/collection'
import { collectioncardconstants } from '../../constants/componentsContants/collection/collection'
import Product from './product/Product'

const Products = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2]
  console.log(location, id);
  const a = []
  const lists = collectioncardconstants.filter(v=>v.id==id&&a.push(v))

    const isLoading = () => {
        return <Product />
    }
  return (
    <Product list={lists} />
  )
}

export default Products