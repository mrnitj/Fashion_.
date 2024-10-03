import React from "react";
import { Box, Container, Grid, styled, Typography } from "@mui/material";

import FashionLogo from "../logo/FashionLogo";
import Hero from "../../Assets/fashionjpg-removebg-preview.png";

const MainContainer = styled(Container)(({ theme }) => ({
    marginTop:'1rem',
    paddingBottom:'1rem',
}));

const GridContainer = styled(Grid)(({ theme }) => ({}));
const GridItem = styled(Grid)(({ theme }) => ({}));
const LogoContainer = styled(Box)(({ theme }) => ({
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));
const HeroContainer = styled(Box)(({ theme }) => ({
    overflow: "hidden",
    "& img": {
        objectFit: "contain",
        width: "100%",
        height: "100%",
    },
}));
const SubHeader = styled(Box)(({ theme }) => ({
    fontFamily: "Mina",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    "& .number": {
        transform: "rotate(90deg)",
        fontWeight: 700,
        fontSize: "63px",
        fontFamily: "inherit",
        height: "fit-content",
        width: "fit-content",
        [theme.breakpoints.down("md")]: {
            transform: "rotate(0)",
        },
    },
    "& .text": {
        fontSize: "1rem",
        maxWidth: "4rem",
        fontFamily: "inherit",
        [theme.breakpoints.down("md")]: {
            maxWidth: "100%",
        },
    },
}));

const HeroSection = () => {
    return (
        <MainContainer maxWidth="xl">
            <GridContainer container spacing={{xs:2,sm:1}}>
                <GridItem item xs={12} sm={6} md={4}>
                    <LogoContainer>
                        <FashionLogo />
                    </LogoContainer>
                </GridItem>
                <GridItem item xs={12} sm={6} md={4}>
                    <HeroContainer>
                        <img src={Hero} alt="" />
                    </HeroContainer>
                </GridItem>
                <GridItem item xs={12} md={4}>
                    <SubHeader>
                        <Typography className="number">001</Typography>
                        <Typography className="text">light up you future</Typography>
                    </SubHeader>
                </GridItem>
            </GridContainer>
        </MainContainer>
    );
};

export default HeroSection;
