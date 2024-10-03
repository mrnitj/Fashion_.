import { Box, Container, FormControl, Grid, InputBase, styled, Typography } from "@mui/material";
import SignupImg from "../Assets/Signup.png";
import { Link } from "react-router-dom";

const MainContainer = styled(Container)(({ theme }) => ({
    overflow: "hidden",
    padding: "2rem 2rem",
}));
const LogoContainer = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
}));
const Logo = styled(Box)(({ theme }) => ({}));
const Typo = styled(Box)(({ theme }) => ({
    fontSize: "15rem",
    fontFamily: "Marko One",
    fontWeight: "bold",
    position: "relative",
    display: "inline-block",
    color: "#00000013",
    userSelect: "none",
    [theme.breakpoints.down("md")]: {
        fontSize: "10rem",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "5rem",
    },
    "&::after": {
        content: '"\\00AE"',
        position: "absolute",
        top: "0.2em",
        right: "0em",
        fontSize: "0.35em",
    },
}));

const SignUpContainer = styled(Box)(({ theme }) => ({
    zIndex: 1,
}));
const GridContainer = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down('md')]:{
        flexDirection:'column-reverse'
    }
}));
const GridItem = styled(Grid)(({ theme }) => ({}));

const ImageContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));
const TexFieldContainer = styled(Box)(({ theme }) => ({
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
}));

const CustomFormContrroll = styled(FormControl)(({ theme }) => ({
    width: "100%",
}));
const Labels = styled(Typography)(({ theme }) => ({
    fontFamily: "Mina",
    marginBottom: ".5rem",
}));
const Inputs = styled(Box)(({ theme }) => ({
    height: "2.5rem",
    marginBottom: "1.5rem",
    padding: "0 1rem",
    borderRadius: "50px",
    backgroundColor: "white",
    width: "80%",
    [theme.breakpoints.down("sm")]: {
        width: "100%",
    },
}));
const CustomInputBase = styled(InputBase)(({ theme }) => ({
    width: "100%",
    height: "100%",
}));

const Button = styled(Typography)(({ theme }) => ({
    padding: ".3rem 1.5rem",
    border: "1px solid black",
    width: "fit-content",
    cursor: "pointer",
    boxShadow: "3px 3px 0px 0px rgba(0,0,0,0.75)",
    transition: "all 0.15s",
    marginBottom: "1rem",
    "&:active": {
        boxShadow: "none",
    },
}));

const SignUp = () => {
    return (
        <MainContainer maxWidth={"lg"}>
            <LogoContainer>
                <Logo>
                    <Typo>fashion.</Typo>
                </Logo>
            </LogoContainer>
            <SignUpContainer>
                <GridContainer container spacing={2}>
                    <GridItem item xs={12} md={6}>
                        <ImageContainer>
                            <img src={SignupImg} alt="signupimage" />
                        </ImageContainer>
                    </GridItem>
                    <GridItem item xs={12} md={6}>
                        <TexFieldContainer>
                            <CustomFormContrroll>
                                <Labels component="label">Name</Labels>
                                <Inputs>
                                    <CustomInputBase placeholder="name" type="text" />
                                </Inputs>
                                <Labels component="label">Email</Labels>
                                <Inputs>
                                    <CustomInputBase placeholder="email" type="email" />
                                </Inputs>
                                <Labels component="label">Password</Labels>
                                <Inputs>
                                    <CustomInputBase placeholder="password" type="password" />
                                </Inputs>
                                <Button component="a">SignUp</Button>
                                <Typography variant="caption">
                                    already have a account{" "}
                                    <span>
                                        <Link to={"/login"}>login</Link>
                                    </span>
                                </Typography>
                            </CustomFormContrroll>
                        </TexFieldContainer>
                    </GridItem>
                </GridContainer>
            </SignUpContainer>
        </MainContainer>
    );
};

export default SignUp;
