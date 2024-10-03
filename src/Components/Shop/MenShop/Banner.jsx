import { Box, Container, styled } from "@mui/material";

import bgImage from "../../../Assets/img4.png";

import React from "react";

const MainContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    overflow: "hidden",
    padding: "0rem 0",
    background: "#8d8b8b",

    "& .img": {
        height: "100%",
        width: "100%",
        objectFit: "cover",
    },
}));

const Banner = () => {
    return (
        <MainContainer>
            <img
                className="img"
                src="https://media.gucci.com/content/HeroRegularStandard_3200x1350/1717748231/HeroRegularStandard_Gucci-Men-June24-1622-GUC-004B-0367-G-v3_001_Default.jpg"
                alt=""
            />
        </MainContainer>
    );
};

export default Banner;
