import React from "react";
import { Box, Container, styled, Typography } from "@mui/material";

import { PiBagThin } from "react-icons/pi";

import HamburgerBar from "./HamburgerBar";
import { useNavigate } from "react-router-dom";

const Navbar = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "inter",
    height: "4rem",
    borderBottom: "1px solid grey",
    position: "sticky",
    top: "0",
    zIndex: 999,
    background: "#f3f3f3",
}));
const Plus1 = styled(Typography)(({ theme }) => ({
    textTransform: "uppercase",
    fontFamily: "inherit",
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
        fontSize: "0.9rem",
    },
}));
const Lookbook = styled(Typography)(({ theme }) => ({
    fontFamily: "inherit",
    fontWeight: 700,
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
        fontSize: "0.9rem",
    },
    "&::after": {
        content: '"⌵"',
    },
}));
const Links = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
        fontSize: "0.9rem",
        gap: "0.4rem",
    },
}));

const LinkItems = styled(Typography)(({ theme }) => ({
    fontFamily: "inherit",
    fontWeight: 700,
    textTransform: "uppercase",
    position: "relative",
    cursor: "pointer",
    display: "grid",
    placeItems: "center",
    [theme.breakpoints.down("sm")]: {
        fontSize: "0.9rem",
    },
    "&::before": {
        content: '""',
        height: "2px",
        width: "100%",
        background: "black",
        position: "absolute",
        bottom: "0",
        left: "0",
        transition: "transform 0.5s",
        transformOrigin: "left",
        transitionTimingFunction: "cubic-bezier(0.5, 1.6, 0.4, 0.7)",
        transform: "scaleX(1)",
    },
    "&:hover::before": {
        transform: "scaleX(0)",
        transformOrigin: "right",
    },
}));
const MenuDots = styled(Box)(({ theme }) => ({}));

const MainNavbar = () => {
    const navigate = useNavigate();

    return (
        <Navbar maxWidth={"xl"}>
            <Plus1>+1</Plus1>
            <Lookbook>Lookbook</Lookbook>
            <Links>
                <LinkItems>
                    <PiBagThin style={{ fontSize: "20px" }} />
                </LinkItems>
                <LinkItems>subscribe</LinkItems>
                <MenuDots>
                    <HamburgerBar />
                </MenuDots>
            </Links>
        </Navbar>
    );
};

export default MainNavbar;
