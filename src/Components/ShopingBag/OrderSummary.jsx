import { Box, styled } from '@mui/material'
import React from 'react'

const MainContainer  = styled(Box)(({theme})=>({
    width:"30rem",

    [theme.breakpoints.down('md')]:{
      width:'100%'
    }
    
    
}))


const OrderSummary = () => {
  return (
    <MainContainer>OrderSummary</MainContainer>
  )
}

export default OrderSummary