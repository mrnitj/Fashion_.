import { Box, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const Card = styled(Box)(({ theme }) => ({
    backgroundColor: "#fff",
    height: "25rem",
    position: "relative",
    fontFamily: "Helvetica",
    [theme.breakpoints.down("sm")]: {
        height: "15rem",
    },
    "&:hover": {
        cursor: "pointer",
    },
    "& .img": {
        height: "100%",
        width: "100%",
        objectFit: "cover",
        objectPosition: "bottom",
    },
}));

const IconContainer = styled(Box)(({ theme, hover, index }) => ({
    height: "3rem",
    display: "flex",
    justifyContent: "space-between",
    zIndex: hover == index ? 97 : 95,
    position: "absolute",
    background: "#fff",
    width: "100%",
    alignItems: "center",
    padding: "0 .5em",
}));

const IconContainrTxt = styled(Typography)({
    textTransform: "uppercase",
    fontSize: ".6em",
});
const IconContainerIcon = styled(Box)({});

const Hoverd = styled(Box)(({ theme }) => ({
    position: "absolute",
    height: "120%",
    width: "100%",
    background: "#fff",
    zIndex: 96,
    top: 0,
    transition: " all 0.3s ease-in-out",
    boxShadow: "0px 8px 24px 0px rgba(0, 0, 0, .1)",
    paddingTop: "3rem",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
        height: "150%",
    },
}));

const HoverdImg = styled(Box)(({ theme }) => ({
    height: "70%",
    width: "100%",
    backgroundColor: "white",
}));
const TitlePriceContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    height: "30%",
    padding: "1rem 0",
    [theme.breakpoints.down("sm")]: {
        padding: "0.4rem 0.1rem",
        gap: "0.5rem",
    },
}));
const Title = styled(Typography)(({ theme }) => ({
    textTransform: "uppercase",
    fontSize: ".75em",
    fontWeight: 600,
    fontFamily: "inherit",
    color: "#00000099",
    letterSpacing: ".04em",
    [theme.breakpoints.down("sm")]: {
        fontSize: "0.6em",
        letterSpacing: "0.1em",
        textAlign: "center",
    },
}));
const Price_Link = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: ".3rem",
}));
const Price = styled(Typography)({});
const ShopNow = styled(Typography)(({ theme }) => ({
    textTransform: "uppercase",
    fontSize: ".75em",
    fontWeight: 700,
    color: "black",
    position: "relative",
    fontFamily: "inherit",
    letterSpacing: ".02em",
    [theme.breakpoints.down("sm")]: {
        fontSize: "0.6em",
        letterSpacing: "0.1em",
        textAlign: "center",
    },
    "&::before": {
        content: "''",
        height: "1px",
        width: "100%",
        background: "black",
        position: "absolute",
        bottom: 0,
        left: 0,
    },
}));

const ProductCard = ({ products, index }) => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const navigate = useNavigate();

    const handleMouseEnter = (index) => {
        setHoveredCard(index);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    return (
        <>
            <Card onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
                <IconContainer hover={hoveredCard} index={index}>
                    <IconContainrTxt>add campiagn</IconContainrTxt>
                    <IconContainerIcon>
                        <BsSuitHeart style={{ fontSize: ".8em" }} />
                    </IconContainerIcon>
                </IconContainer>
                <img className="img" src={products.img} alt={products.title} />
                <Hoverd
                    onClick={() => navigate(`/view/${products.id}`)}
                    sx={{ display: hoveredCard === index ? "block" : "none" }}
                >
                    <HoverdImg>
                        <img className="img" src={products.img} alt="image" />
                    </HoverdImg>
                    <TitlePriceContainer>
                        <Title>medium backbag with gucci logo</Title>
                        <Price_Link>
                            <Price>$ 1,100</Price>
                            <ShopNow component={Link}>shop now</ShopNow>
                        </Price_Link>
                    </TitlePriceContainer>
                </Hoverd>
            </Card>
        </>
    );
};

export default ProductCard;
