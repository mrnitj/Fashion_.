import React from "react";

import { Link } from "react-router-dom";

import { Box, Container, Grid, styled, Typography } from "@mui/material";

import Img5 from "../../Assets/img5.png";
import Img8 from "../../Assets/img8.png";

// styles---------------

const MainContainer = styled(Container)(({ theme }) => ({
    marginTop: "1rem",
    marginBottom: "2rem",
}));

const GridContainer = styled(Grid)({});
const GridItem = styled(Grid)(({ theme }) => ({}));

const GridContent = styled(Box)(({ theme }) => ({
    height: "80vh",
    background: "#a5a5a5",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    position: "relative",
    borderRadius: "1rem",
    backgroundSize:'contain'
}));

const MainHead = styled(Typography)(({ theme }) => ({
    textTransform: "uppercase",
    padding: ".1rem 1rem",
    backgroundColor: "#ffffff29",
    display: "inline-block",
    color: "white",
}));

const StickyContainer = styled(Box)(({ theme }) => ({
    height: "60vh",
    width: "100%",
    position: "absolute",
    bottom: "0",
}));
const Sticky = styled(Box)(({ theme }) => ({
    height: "30vh",
    width: "100%",
    position: "sticky",
    top: "calc(100% - 25vh)",
    display: "flex",
    flexDirection: "column",
    placeItems: "center",
    justifyContent: "center",
    gap: "2rem",
    marginBottom: "2rem",
}));

const SubHead = styled(Typography)(({ theme }) => ({
    fontSize: "1.4em",
    fontWeight: 700,
    color: "#ffff",
    position: "static",
    top: 0,
}));
const Button = styled(Typography)(({ theme }) => ({
    textTransform: "uppercase",
    textDecoration: "none",
    color: "#ffffff",
    backgroundColor: "#d3c8c839",
    border: "1.2px solid #ffffff",
    fontWeight: 700,
    padding: "1.2rem 5rem",
    position: "relative",
    transition: "all 0.15s",
    "&::before": {
        content: "'explore'",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    "&:hover": {
        padding: "1rem 4.8rem",
    },
}));

// styles---------------

const NavigationSection = () => {
    return (
        <MainContainer maxWidth='xl'>
            <GridContainer container spacing={2}>
                <GridItem item xs={12} md={6}>
                    <GridContent sx={{ backgroundImage: `url(${Img5})` }}>
                        <MainHead variant="h6">men</MainHead>
                        <StickyContainer>
                            <Sticky>
                                <SubHead>Mens over coat</SubHead>
                                <Button component={Link} to="/shop/men"></Button>
                            </Sticky>
                        </StickyContainer>
                    </GridContent>
                </GridItem>
                <GridItem item xs={12} md={6}>
                    <GridContent sx={{ backgroundImage: `url(${Img8})` }}>
                        <MainHead variant="h6">women</MainHead>
                        <StickyContainer>
                            <Sticky>
                                <SubHead>Woments New Fashion</SubHead>
                                <Button component={Link} to="/shop/women"></Button>
                            </Sticky>
                        </StickyContainer>
                    </GridContent>
                </GridItem>
            </GridContainer>
        </MainContainer>
    );
};

export default NavigationSection;
