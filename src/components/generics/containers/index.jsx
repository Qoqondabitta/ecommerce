import React from 'react'
import {Container as Containers} from "./style"

const Container = ({children, type}) => {
  return <Containers type={type}>{children}</Containers>;
}

export default Container