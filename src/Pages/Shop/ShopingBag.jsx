import { Box, styled } from "@mui/material";
import React from "react";
import MainNavbar from "../../Components/roots/MainNavbar";
import Selections from "../../Components/ShopingBag/Selections";
import OrderSummary from "../../Components/ShopingBag/OrderSummary";

const ContentContainer = styled(Box)({
    position: "relative",
    zIndex: 2,
});
const FixedBanner = styled(Box)(({ theme }) => ({
    height: "45vh",
    position: "fixed",
    width: "100%",
    color: "white",
    zIndex: 1,
    overflow: "hidden",
    "& .picture": {
        height: "100%",
        width: "100%",
        objectFit: "cover",
    },

    [theme.breakpoints.down("lg")]: {
        height: "35vh",
    },
}));
const Wraper = styled(Box)(({ theme }) => ({
    height: "45vh",
    backgroundColor: "transparent",

    [theme.breakpoints.down("lg")]: {
        height: "35vh",
    },
}));
const ContetntSubContainer = styled(Box)({
    backgroundColor: "white",
    height: "100vh",
    position: "relative",
    width: "100%",

    "&::before": {
        content: "''",
        height: "50px",
        width: "50px",
        position: "absolute",
        right: 0,
        left: "50%",
        transform: "translate(-50% ,-50%) rotate(45deg)",
        backgroundColor: "#000000",
        filter: "drop-shadow(0.25rem 0.25rem 0.15rem rgba(0, 0, 0, 0.5))",
    },
    "&::after": {
        content: "'f.'",
        position: "absolute",
        right: 0,
        top: 0,
        left: "50%",
        fontSize: "1.5rem",
        height: "50px",
        width: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: "translate(-50% ,-50%)",
        color: "#fff",
    },
});

const Contents = styled(Box)(({ theme }) => ({
    display: "flex",
    maxWidth: "75rem",
    backgroundColor: "#3d3d4433",
    margin: "0 auto",
    padding: "3.313rem 1.875rem ",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        padding: "3.313rem .5rem",
    },
}));

const ShopingBag = () => {
    return (
        <>
            <MainNavbar />
            <FixedBanner>
                <img
                    className="picture"
                    src="https://res.cloudinary.com/dnrmw8eif/image/upload/v1727799524/guccibanner_wwyrdi.avif"
                    alt=""
                />
            </FixedBanner>
            <ContentContainer>
                <Wraper></Wraper>
                <ContetntSubContainer>
                    <Contents>
                        <Selections />
                        <OrderSummary />
                    </Contents>
                </ContetntSubContainer>
            </ContentContainer>
        </>
    );
};

export default ShopingBag;
