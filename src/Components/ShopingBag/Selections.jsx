    import { Box, styled, Typography } from "@mui/material";
    import React from "react";

    const MainContainer = styled(Box)({
        width: "100%",
        // backgroundColor:'#c28383',
        fontSize: "1rem",
        padding: "0 .5rem",
    });

    const MainHead = styled(Typography)(({ theme }) => ({
        textTransform: "uppercase",
        fontSize: "0.8em",
        letterSpacing: "0.03em",
        fontWeight: 700,
        fontFamily: "mina",
        paddingBottom: "0.5rem",
        borderBottom: "1px solid #000",
    }));
    const CardContainer = styled(Box)(({ theme }) => ({}));
    const ItemCard = styled(Box)(({ theme }) => ({}));
    const ImgSEction = styled(Box)(({ theme }) => ({}));

    const Selections = () => {
        return (
            <MainContainer>
                <MainHead>your selections</MainHead>
                <CardContainer>
                    <ItemCard>

                    </ItemCard>
                </CardContainer>
            </MainContainer>
        );
    };

    export default Selections;
