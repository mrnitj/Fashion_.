import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MainContainer = styled(Box)(({ theme }) => ({
    width: "21.563rem",
    minHeight: "37.875rem",
    border: "1px solid black",
    padding: "1.563rem",
    fontSize: "1rem",
    fontFamily: "mina",
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
    [theme.breakpoints.down("md")]: {
        width: "100%",
        minHeight:'fit-content',
        gap:'1.5rem'
    },
}));

const OrderHeading = styled(Typography)(({ theme }) => ({
    fontSize: "0.8em",
    textTransform: "uppercase",
    fontWeight: 700,
    fontFamily: "inherit",
    letterSpacing: "0.05em",
    // width: "fit-content",
    position: "relative",
    paddingBottom: "1em",
    "&::after": {
        content: "''",
        width: "1.5em",
        height: "0.01em",
        backgroundColor: "#00000065",
        position: "absolute",
        bottom: "0.9em",
        left: 0,
    },
    "&::before": {
        content: "''",
        height: "0.01em",
        width: "100%",
        backgroundColor: "#00000065",
        position: "absolute",
        bottom: 0,
        left: 0,
    },
}));

const PriceContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
}));

const Labels = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    width: "100%",
}));

const SubTexts = styled(Typography)(({ theme }) => ({
    width: "100%",
    fontSize: "0.8em",
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "inter",
}));

const Price = styled("span")(({ theme }) => ({
    "&.total": {
        fontSize: "1.5em",
    },
    "&.tax": {
        color: "#00000065",
    },
}));

const CheckOutBtn = styled(Typography)(({ theme }) => ({
    fontSize: "0.8em",
    width: "100%",
    backgroundColor: "#000",
    color: "#fff",
    display: "block",
    textAlign: "center",
    padding: "1.2em 0",
    fontFamily: "inter",
    textTransform: "uppercase",
    fotWeight: 700,
}));

const OtherBtnContainer = styled(Box)(({ theme }) => ({}));

const OthersBtn = styled(Typography)(({ theme }) => ({
    fontSize: "0.8em",
    width: "100%",
    display: "block",
    textAlign: "center",
    padding: "0.8em 0",
    fontFamily: "inter",
    textTransform: "uppercase",
    fotWeight: 700,
    border: "2px solid black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5em",

    "& .btnlogo": {
        height: "20px",
    },
}));

const OrderSummary = () => {
    return (
        <MainContainer>
            <OrderHeading>order summery</OrderHeading>
            <PriceContainer>
                <Labels>
                    <SubTexts>
                        Subtotal
                        <Price>$ 7500</Price>
                    </SubTexts>
                    <SubTexts>
                        Shipping
                        <Price className="tax">Free (Premium Express)</Price>
                    </SubTexts>
                    <SubTexts>
                        Exstimated Tax
                        <Price>$ 15</Price>
                    </SubTexts>
                    <SubTexts>
                        Exstimated Total
                        <Price className="total">$ 7515</Price>
                    </SubTexts>
                </Labels>
            </PriceContainer>
            <CheckOutBtn component={Link}>checkout</CheckOutBtn>
            <OtherBtnContainer>
                <OthersBtn component={Link}>
                    pay with
                    <img
                        className="btnlogo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png"
                        alt=""
                    />
                </OthersBtn>
                <Typography sx={{textAlign:'center', fontSize:'0.8em'}}>OR</Typography>
                <OthersBtn component={Link}>
                    pay with
                    <img
                        className="btnlogo"
                        src="https://en.wikichip.org/w/images/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png"
                        alt=""
                    />
                </OthersBtn>
            </OtherBtnContainer>
        </MainContainer>
    );
};

export default OrderSummary;
