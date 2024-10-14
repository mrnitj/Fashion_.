import { Box, FormControl, MenuItem, Select, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const MainContainer = styled(Box)({
    width: "100%",
    // backgroundColor:'#c28383',
    fontSize: "1rem",
    padding: "0 .5rem",
    fontFamily: "mina",
});

const MainHead = styled(Typography)(({ theme }) => ({
    textTransform: "uppercase",
    fontSize: "0.8em",
    letterSpacing: "0.03em",
    fontWeight: 700,
    paddingBottom: "0.5rem",
    borderBottom: "1px solid grey",
    fontFamily: "inherit",
}));
const CardContainer = styled(Box)(({ theme }) => ({}));
const ItemCard = styled(Box)(({ theme }) => ({
    fontSize: "1rem",
    minHeight: "14.813rem",
    // backgroundColor:'blue',
    borderBottom: "1px solid grey",
    display: "flex",
    fontFamily: "inherit",
    padding: "1.5rem 0",
    gap: "1.5em",
    [theme.breakpoints.down("md")]: {
        fontSize: "0.9rem",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
    },
}));
const ImgSection = styled(Box)(({ theme }) => ({
    minWidth: "12.938rem",
    width: "12.938rem",
    backgroundColor: "yellow",
    minHeight: "15rem",
}));
const Desc_QtyContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "1em",
    [theme.breakpoints.down("md")]: {
        gap: "1rem",
    },
}));

const Desc_Qty_Price = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    // background: "red",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
    },
}));

const Card_Title_container = styled(Box)(({ theme }) => ({
    maxWidth: "16.438rem",
    //    backgroundColor:'aqua',
    display: "flex",
    flexDirection: "column",
    gap: ".5rem",
    // marginTop: "1rem",
}));

const Qty_Price_Container = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "3em",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column-reverse",
        gap: "1em",
    },
}));

const Qty = styled(Box)(({ theme }) => ({}));
const Price = styled(Typography)(({ theme }) => ({}));

const AvailabilityConainer = styled(Box)(({ theme }) => ({}));

const ActionContainer = styled(Box)(({ theme }) => ({}));
const Actions = styled(Typography)(({ theme }) => ({
    textTransform: "uppercase",
    color: "#000",
    fontSize: "0.8em",
    letterSpacing: "0.05em",
    fontWeight: 700,
    padding: "0.2em 0",
    position: "relative",

    "&::before": {
        content: "''",
        position: "absolute",
        height: "1px",
        background: "#000",
        width: "100%",
        right: 0,
        bottom: 0,
        transition: "transform 0.15s",
        transformOrigin: "left",
        transform: "scaleX(1)",
    },

    "&:hover::before": {
        transform: "scaleX(0)",
        transformOrigin: "right",
    },
}));

const CardTitle = styled(Typography)(({ theme }) => ({
    fontSize: "1.09em",
    fontFamily: "inherit",
}));

const AvailableTitle = styled(Typography)(({ theme }) => ({
    textTransform: "uppercase",
    fontSize: ".75em",
    letterSpacing: "0.02em",
    fontWeight: 700,
}));

const CardSubDecs = styled(Typography)(({ theme }) => ({
    fontSize: "0.78em",
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

const Selections = () => {
    const [qty, setQty] = useState(`Qty:${1}`);

    const handleChange = (event) => {
        setQty(event.target.value);
    };

    return (
        <MainContainer>
            <MainHead>your selections</MainHead>
            {/* <CardContainer> */}
            <ItemCard>
                <ImgSection></ImgSection>
                <Desc_QtyContainer>
                    <Desc_Qty_Price>
                        <Card_Title_container>
                            <CardTitle>Large tote bag with hook closure</CardTitle>
                            <CardSubDecs variant="subtitle2">Style# 7981452 AZB4E 1035</CardSubDecs>
                            <CardSubDecs variant="subtitle2">Variation: grey leather</CardSubDecs>
                        </Card_Title_container>
                        <Qty_Price_Container>
                            <Qty>
                                <FormControl fullWidth sx={{ maxWidth: "170px" }}>
                                    <CustomSelect
                                        id="demo-simple-select"
                                        value={qty}
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
                                            getcontentanchorel: null, // Disable auto-anchoring to ensure it opens upward
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
                                        {Array.from({ length: 20 }, (_, i) => (
                                            <CustomMenuItem key={i} value={`Qty:${i + 1}`}>{`Qty:${i + 1}`}</CustomMenuItem>
                                        ))}
                                    </CustomSelect>
                                </FormControl>
                            </Qty>
                            <Price>$7,600</Price>
                        </Qty_Price_Container>
                    </Desc_Qty_Price>

                    <AvailabilityConainer>
                        <AvailableTitle>available</AvailableTitle>
                        <CardSubDecs variant="subtitle2">Enjoy comlimentary delivary or Collect in Store.</CardSubDecs>
                    </AvailabilityConainer>
                    <ActionContainer>
                        <Actions component={Link}>remove</Actions>
                    </ActionContainer>
                </Desc_QtyContainer>
            </ItemCard>
            {/* </CardContainer> */}
        </MainContainer>
    );
};

export default Selections;
