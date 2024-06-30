import React from 'react'
import {Container as Containers} from "./style"

const Container = ({children, type, onClick}) => {
  return <Containers type={type} onClick={onClick}>{children}</Containers>;
}

export default Container