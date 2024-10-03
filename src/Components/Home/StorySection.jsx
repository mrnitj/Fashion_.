import { Box, Grid, Typography } from "@mui/material";
import { Container, styled } from "@mui/system";
import Img from "../../Assets/img2.png";

import FashionLogo from "../logo/FashionLogo";

const MainContainer = styled(Container)(({ theme }) => ({
    minHeight: "100vh",
    fontFamily: "Mina",
    marginTop: "1rem",
    background: "#dfdfdf92",
    borderRadius: "10px",
    position: "relative",
    "&::before": {
        content: '"f."',
        position: "absolute",
        left: "50%",
        top: "-15rem",
        fontSize: "30rem",
        color: "#0000006b",
        transform: "translate(-50%, 50%)",
        zIndex: "-1",
        fontFamily: "Marko One",
    },
    [theme.breakpoints.up('xl')]:{
        minHeight:'60vh',
    }
}));

const MainTitle = styled(Typography)(({ theme }) => ({
    textAlign: "center",
    fontSize: "2rem",
    fontFamily: "inherit",
    textTransform: "uppercase",
}));

const GridContainer = styled(Grid)(({ theme }) => ({
    marginTop: "1rem",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column-reverse",
    },
}));
const GridItem = styled(Grid)(({ theme }) => ({}));

const ImageContainer = styled(Box)(({ theme }) => ({
    height: " 100%",
    border: "1px solid grey",
    minHeight: "20rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
}));

const Imgage = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${Img})`,
    height: "100%",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "absolute",
}));

const Logo = styled(Box)(({ theme }) => ({}));
const Typo = styled(Box)(({ theme }) => ({
    fontSize: "6rem",
    fontFamily: "Marko One",
    fontWeight: "bold",
    position: "relative",
    display: "inline-block",
    [theme.breakpoints.down("md")]: {
        fontSize: "5rem",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "4rem",
    },
    "&::before": {
        content: '"\\00AE"',
        position: "absolute",
        top: "0.2em",
        right: "0em",
        fontSize: "0.35em",
    },
    "&::after": {
        content: '"fashion."',
        position: "absolute",
        inset: "0 0 0 0",
        WebkitTextStroke: "1px #f3f3f3",
        color: "transparent",
        zIndex: 2,
    },
}));

const TextContainer = styled(Box)(({ theme }) => ({
    height: " 100%",
    "& .texts": {
        fontFamily: "inter",
        fontSize: "1rem",
        letterSpacing: "0.02rem",
        textIndent: "1.5rem",
    },
}));

const StorySection = () => {
    return (
        <MainContainer maxWidth='lg'>
            <MainTitle>Our Story</MainTitle>
            <GridContainer container spacing={2}>
                <GridItem item xs={12} md={6}>
                    <ImageContainer>
                        <Logo>
                            <Typo>fashion.</Typo>
                        </Logo>
                        <Imgage></Imgage>
                    </ImageContainer>
                </GridItem>
                <GridItem item xs={12} md={6}>
                    <TextContainer>
                        <Typography className="texts">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, eveniet et! Sapiente,
                            aliquid dolorum? Quidem exercitationem atque aspernatur minima officia sunt magni ipsa illum
                            ratione voluptates sint libero fugit distinctio nihil explicabo sit mollitia sequi, doloribus
                            facilis hic cum laborum? Recusandae voluptatem, mollitia ullam doloribus necessitatibus
                        </Typography>
                        <Typography className="texts">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum labore eaque, culpa quam autem
                            modi quasi repellendus voluptatibus at, laudantium tenetur recusandae aut tempore similique
                            nihil, aliquid ex nisi sit libero dolorem ipsa. Repellendus explicabo soluta vel alias rem?
                            Delectus quos explicabo qui eos cumque voluptatum quae consequuntur nihil sit?
                        </Typography>
                    </TextContainer>
                </GridItem>
            </GridContainer>
        </MainContainer>
    );
};

export default StorySection;
