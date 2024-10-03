import { Box, colors, FormControl, MenuItem, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import Select  from "@mui/material/Select";
import { CgRuler } from "react-icons/cg";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";

const MainContainer = styled(Box)(({ theme }) => ({
    background: "grey",
    height: "95vh",
    position: "relative",
    [theme.breakpoints.down("md")]: {
        height: "100vh",
    },
}));

const AaddTOShop = styled(Box)(({ theme }) => ({
    fontSize: "1rem",
    height: "18rem",
    width: "25rem",
    background: "#fff",
    position: "absolute",
    bottom: "2rem",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "1em",
    fontFamily: "Helvetica",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    [theme.breakpoints.up("md")]: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
    },
    [theme.breakpoints.down("md")]: {
        width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "0.9rem",
    },
}));

const Title_Price = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "1.2em",
    fontFamily: "inherit",
}));

const Content = styled(Typography)(({ theme }) => ({
    textTransform: "uppercase",
    fontSize: "1em",
    fontWeight: 700,
    textAlign: "center",
    fontFamily: "inherit",
}));

const Subs = styled(Typography)(({ theme }) => ({
    color: "rgba(0, 0, 0, 0.945)",
    fontFamily: "mina",
}));

const SizeContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
}));
const SizeGuid = styled(Typography)(({ theme }) => ({
    textTransform: "uppercase",
    fontSize: "0.75em",
    fontWeight: 400,
    display: "flex",
    alignItems: "center",
    color: "#000000ab",
    gap: ".5em",
    "& .icon": {
        display: "flex",
        alignItems: "center",
    },
}));

const CustomSelect = styled(Select)(({ theme }) => ({
    border: "1px solid grey",
    borderRadius: "0",
    margin: 0,
    padding: 0,
    "& .MuiSelect-select": {
        padding: "0.5em 1em",
        outline: "none",
        backgroundColor: "transparent",
        "&:focus": {
            border: "none",
            boxShadow: "none",
        },
    },
    "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
        border: "none",
    },
    "& .MuiSelect-icon": {
        color: "inherit",
    },
}));

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
    border: "1px solid #0000001a",
}));

const AddToBtn = styled(Typography)(({ theme }) => ({
    color: "#fff",
    display: "block",
    background: "#000",
    margin: "0 auto",
    width: "100%",
    padding: "1.1em 0",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: ".8em",
    letterSpacing: ".11em",
    fontWeight: 700,
    transition: "all 0.15s ease",
    "&:hover": {
        background: "#000000d3",
    },
}));

const Banner = () => {
    const [size, setSize] = useState("Select Size");

    const handleChange = (event) => {
        setSize(event.target.value);
    };

    return (
        <MainContainer>
            <AaddTOShop>
                <Title_Price>
                    <Content>rib silk tank top</Content>
                    <Content>$ 1,700</Content>
                </Title_Price>
                <Subs variant="caption">Item runs: True to size</Subs>
                <SizeContainer>
                    <FormControl fullWidth sx={{ maxWidth: "170px" }}>
                        <CustomSelect
                            id="demo-simple-select"
                            value={size}
                            onChange={handleChange}
                            variant="outlined"
                            MenuProps={{
                                anchorOrigin: {
                                    vertical: "top",
                                    horizontal: "center",
                                },
                                transformOrigin: {
                                    vertical: "bottom",
                                    horizontal: "center",
                                },
                                getContentAnchorEl: null, // Disable auto-anchoring to ensure it opens upward
                                PaperProps: {
                                    style: {
                                        padding: 0, // Remove padding from the Paper component (which wraps the dropdown list)
                                    },
                                },
                                MenuListProps: {
                                    style: {
                                        padding: 0, // Remove padding from the MenuList component
                                    },
                                },
                            }}
                        >
                            <CustomMenuItem value={"Select Size"}>Select Size</CustomMenuItem>
                            <CustomMenuItem value={"M"}>M</CustomMenuItem>
                            <CustomMenuItem value={"L"}>
                                <span>L</span>
                                <span>|</span>Find in store
                            </CustomMenuItem>
                            <CustomMenuItem value={"XL"}>
                                <span>XL</span>
                                <span>|</span> Find in store{" "}
                            </CustomMenuItem>
                        </CustomSelect>
                    </FormControl>
                    <SizeGuid>
                        <span className="icon">
                            <CgRuler style={{ fontSize: "2em", color: "#000000ab" }} />
                        </span>{" "}
                        view size guid
                    </SizeGuid>
                </SizeContainer>
                <AddToBtn component={Link} to="/bag">
                    add to shopping bag
                </AddToBtn>
            </AaddTOShop>
        </MainContainer>
    );
};

export default Banner;
