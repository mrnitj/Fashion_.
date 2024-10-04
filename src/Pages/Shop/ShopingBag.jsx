import { Box, styled, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import MainNavbar from "../../Components/roots/MainNavbar";
import Selections from "../../Components/ShopingBag/Selections";
import OrderSummary from "../../Components/ShopingBag/OrderSummary";

const ContentContainer = styled(Box)(({ theme }) => ({
    position: "relative",
    zIndex: 2,
    fontSize: "1rem",

    [theme.breakpoints.down("md")]: {
        fontSize: ".9rem",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: ".7rem",
    },
}));
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
    position: "relative",

    [theme.breakpoints.down("lg")]: {
        height: "35vh",
    },
    "&::after": {
        content: "''",
        backgroundColor: "#0000003b",
        height: "100%",
        width: "100%",
        position: "absolute",
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

const MainHead = styled(Typography)(({ theme }) => ({
    textTransform: "uppercase",
    fontSize: "3em",
    color: "white",
    position: "absolute",
    bottom: "2rem",
    left: "50%",
    transform: "translate(-50%)",
    zIndex: "2",
    widht: "fit-content",
    textAlign: "center",
}));

const ShopingBag = () => {
    const theme = useTheme();

    const isSmallerScreen = useMediaQuery(theme.breakpoints.down("md"));

    const imgSrc = isSmallerScreen
        ? "https://res.cloudinary.com/dnrmw8eif/image/upload/v1727811010/bannergirl1_p7x2mc.avif"
        : "https://res.cloudinary.com/dnrmw8eif/image/upload/v1727799524/guccibanner_wwyrdi.avif";

    return (
        <>
            <MainNavbar />
            <FixedBanner className="fixed_banner">
                <img className="picture" src={imgSrc} alt="" />
            </FixedBanner>
            <ContentContainer>
                <Wraper className="banner_wrapper">
                    <MainHead>shopping bag</MainHead>
                </Wraper>
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
