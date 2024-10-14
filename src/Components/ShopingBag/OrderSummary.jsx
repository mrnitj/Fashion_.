import { Box, styled, Typography } from "@mui/material";
import React from "react";

const MainContainer = styled(Box)(({ theme }) => ({
    width: "21.563rem",
    minHeight: "37.875rem",
    border: "1px solid black",
    padding: "1.563rem",
    fontSize:'1rem',
    fontFamily:'mina',

    [theme.breakpoints.down("md")]: {
        width: "100%",
    },
}));

const OrderHeading = styled(Typography)(({ theme }) => ({
  fontSize:"0.8em",
  textTransform:'uppercase',
  fontWeight:700,
  fontFamily:'inherit',
  letterSpacing:'0.05em',
  width:'fit-content',
  position:'relative',
  padding:"0.1em 0",
  '&::after':{
    content:"''",
    width:'1.5em',
    height:'0.01em',
    backgroundColor:'#00000065',
    position:'absolute',
    bottom:0,
    left:0

  }



}));

const PriceContainer = styled(Box)(({ theme }) => ({}));
const subTexts = styled(Typography)(({ theme }) => ({}));
const Price = styled(Typography)(({ theme }) => ({}));
const CheckOutBtn = styled(Typography)(({ theme }) => ({}));
const OthersBtn = styled(Typography)(({ theme }) => ({}));

const OrderSummary = () => {
    return (
        <MainContainer>
            <OrderHeading>
              order summery
            </OrderHeading>
        </MainContainer>
    );
};

export default OrderSummary;
