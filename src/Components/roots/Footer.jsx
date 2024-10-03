import { Box, Container, Grid, List, ListItem, ListItemText, styled, Typography } from "@mui/material";
import React from "react";
import { CiMail } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";

const MainContainer = styled(Container)(({ theme }) => ({
    background: "#d9d9d9",
    padding: "1rem 3rem !important",
    marginTop: "1.5rem",
}));

const GridContainer = styled(Grid)(({ theme }) => ({
    // background: "red",
    alignItems: "flex-end",
}));

const GridItem = styled(Grid)(({ theme }) => ({}));

const Lists = styled(List)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        borderBottom: "1px solid",
    },
}));
const Listitm = styled(ListItem)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
        justifyContent: "flex-start",
    },
}));
const ListText = styled(Typography)(({ theme }) => ({}));

const SocialMedia = styled(Box)(({ theme }) => ({
    height: "3rem",
    marginTop: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    borderTop: "1px solid",
    [theme.breakpoints.down("sm")]: {
        border: "none",
    }
}));

const Footer = () => {
    return (
        <MainContainer maxWidth="xl">
            <GridContainer container spacing={2}>
                <GridItem item xs={12} sm={6} md={4}>
                    <Lists>
                        <Listitm disablePadding>
                            <ListText>+xx xxxx xxxxx</ListText>
                        </Listitm>
                        <Listitm disablePadding>
                            <ListText>Lorem, ipsum dolor.</ListText>
                        </Listitm>
                        <Listitm disablePadding>
                            <ListText>Lorem, ipsum.</ListText>
                        </Listitm>
                        <Listitm disablePadding>
                            <ListText>Lorem, ipsum.</ListText>
                        </Listitm>
                    </Lists>
                </GridItem>
                <GridItem item xs={12} sm={6} md={4}>
                    <Lists>
                        <Listitm disablePadding></Listitm>
                        <Listitm disablePadding>
                            <ListText>Lorem, ipsum dolor.</ListText>
                        </Listitm>
                        <Listitm disablePadding>
                            <ListText>Lorem, ipsum.</ListText>
                        </Listitm>
                        <Listitm disablePadding>
                            <ListText>Lorem, ipsum.</ListText>
                        </Listitm>
                    </Lists>
                </GridItem>
                <GridItem item xs={12} sm={6} md={4}>
                    <Lists>
                        <Listitm disablePadding>
                            <ListText>Lorem, ipsum dolor.</ListText>
                        </Listitm>
                        <Listitm disablePadding>
                            <ListText>Lorem, ipsum.</ListText>
                        </Listitm>
                        <Listitm disablePadding>
                            <ListText>Lorem, ipsum.</ListText>
                        </Listitm>
                    </Lists>
                </GridItem>
            </GridContainer>
            <SocialMedia>
                <CiMail style={{ fontSize: "25px", color: "black" }} />
                <CiInstagram style={{ fontSize: "25px", color: "black" }} />
                <CiFacebook style={{ fontSize: "25px", color: "black" }} />
            </SocialMedia>
        </MainContainer>
    );
};

export default Footer;
