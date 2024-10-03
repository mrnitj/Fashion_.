import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Box,
    Breadcrumbs,
    Checkbox,
    Container,
    Divider,
    FormControlLabel,
    FormGroup,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Menu,
    styled,
    Typography,
} from "@mui/material";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FilterContainer = styled(Container)(({ theme }) => ({
    height: "3.6rem",
    background: "#f3f3f3",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex:10,
}));

const NewBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

const Links = styled(Typography)(({ theme }) => ({
    textDecoration: "none",
    color: "black",
    fontFamily: "mina",
    fontWeight: 700,
    fontSize: ".7em",
}));

const FiltersBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
    [theme.breakpoints.down("md")]: {
        flex: 1,
        justifyContent: "space-between",
        gap: ".5rem",
    },
}));

const MenuButton = styled(Box)(({ theme }) => ({
    display: "inline-block",
    cursor: "pointer",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "uppercase",
    fontSize: "0.8em",
    fontFamily: "mina",
    fontWeight: 700,
    "& .icon": {
        marginLeft: ".5em",
        display: "grid",
        placeItems: "center",
        fontSize: "15px",
    },
    [theme.breakpoints.down("md")]: {
        fontSize: ".7em",
    },
}));

const FilterBox = () => {

    const [anchorEl1, setAnchorEl1] = useState(null);
    const [anchorEl2, setAnchorEl2] = useState(null);
    const [anchorEl3, setAnchorEl3] = useState(null);
    const [anchorEl4, setAnchorEl4] = useState(null);

    const [timeoutId1, setTimeoutId1] = useState(null);
    const [timeoutId2, setTimeoutId2] = useState(null);
    const [timeoutId3, setTimeoutId3] = useState(null);
    const [timeoutId4, setTimeoutId4] = useState(null);

    // -----------------
    const handleMouseEnterButton1 = (event) => {
        if (timeoutId1) {
            clearTimeout(timeoutId1);
        }
        setAnchorEl1(event.currentTarget);
    };

    const handleMouseLeaveButton1 = () => {
        const id = setTimeout(() => {
            setAnchorEl1(null);
        }, 1000);
        setTimeoutId1(id);
    };

    const handleMouseEnterMenu1 = () => {
        if (timeoutId1) {
            clearTimeout(timeoutId1);
        }
    };

    const handleMouseLeaveMenu1 = () => {
        setAnchorEl1(null);
    };
    // ---------------------
    const handleMouseEnterButton2 = (event) => {
        if (timeoutId2) {
            clearTimeout(timeoutId2);
        }
        setAnchorEl2(event.currentTarget);
    };

    const handleMouseLeaveButton2 = () => {
        const id = setTimeout(() => {
            setAnchorEl2(null);
        }, 1000);
        setTimeoutId2(id);
    };

    const handleMouseEnterMenu2 = () => {
        if (timeoutId2) {
            clearTimeout(timeoutId2);
        }
    };

    const handleMouseLeaveMenu2 = () => {
        setAnchorEl2(null);
    };

    const handleMouseEnterButton3 = (event) => {
        if (timeoutId3) {
            clearTimeout(timeoutId3);
        }
        setAnchorEl3(event.currentTarget);
    };

    const handleMouseLeaveButton3 = () => {
        const id = setTimeout(() => {
            setAnchorEl3(null);
        }, 1000);
        setTimeoutId3(id);
    };

    const handleMouseEnterMenu3 = () => {
        if (timeoutId3) {
            clearTimeout(timeoutId3);
        }
    };

    const handleMouseLeaveMenu3 = () => {
        setAnchorEl3(null);
    };

    // -----------------
    const handleMouseEnterButton4 = (event) => {
        if (timeoutId4) {
            clearTimeout(timeoutId4);
        }
        setAnchorEl4(event.currentTarget);
    };

    const handleMouseLeaveButton4 = () => {
        const id = setTimeout(() => {
            setAnchorEl1(null);
        }, 1000);
        setTimeoutId4(id);
    };

    const handleMouseEnterMenu4 = () => {
        if (timeoutId4) {
            clearTimeout(timeoutId4);
        }
    };

    const handleMouseLeaveMenu4 = () => {
        setAnchorEl4(null);
    };
    // ---------------------

    const open1 = Boolean(anchorEl1);
    const open2 = Boolean(anchorEl2);
    const open3 = Boolean(anchorEl3);
    const open4 = Boolean(anchorEl4);

    return (
        <div>
            <FilterContainer maxWidth="xl">
                <NewBox>
                    <Breadcrumbs>
                        <Links component={Link}>Men</Links>
                        <Links component={Link}>New</Links>
                    </Breadcrumbs>
                </NewBox>

                <FiltersBox>
                    <>
                        <MenuButton
                            onMouseEnter={handleMouseEnterButton1}
                            onMouseLeave={handleMouseLeaveButton1}
                            aria-controls={open1 ? "simple-menu1" : undefined}
                            aria-haspopup="true"
                        >
                            category
                            <span className="icon">{open1 ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                        </MenuButton>
                        <Menu
                            id="simple-menu1"
                            anchorEl={anchorEl1}
                            open={open1}
                            MenuListProps={{
                                onMouseEnter: handleMouseEnterMenu1,
                                onMouseLeave: handleMouseLeaveMenu1,
                            }}
                            PaperProps={{
                                sx: {
                                    mt: 2,
                                    boxShadow: "none",
                                    background: "#fff",
                                    width: "fit-content",
                                    borderRadius: "0",
                                },
                            }}
                        >
                            <List sx={{ p: "0", m: "0" }}>
                                <ListItem sx={{ p: "0", m: "0" }}>
                                    <ListItemButton sx={{ backgroundColor: "#000" }}>
                                        <ListItemText>
                                            <Typography
                                                sx={{
                                                    color: "#fff",
                                                    fontSize: "12px",
                                                    p: "0",
                                                    m: "0",
                                                    fontFamily: "mina",
                                                }}
                                            >
                                                All(95)
                                            </Typography>
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                                <ListItem sx={{ p: "0", m: "0" }}>
                                    <ListItemButton>
                                        <ListItemText>
                                            <Typography
                                                sx={{
                                                    color: "black",
                                                    fontSize: "12px",
                                                    p: "0",
                                                    m: "0",
                                                    fontFamily: "mina",
                                                }}
                                            >
                                                Accessories(15)
                                            </Typography>
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                                <ListItem sx={{ p: "0", m: "0" }}>
                                    <ListItemButton>
                                        <ListItemText>
                                            <Typography
                                                sx={{
                                                    color: "black",
                                                    fontSize: "12px",
                                                    p: "0",
                                                    m: "0",
                                                    fontFamily: "mina",
                                                }}
                                            >
                                                Shoes(9)
                                            </Typography>
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                                <ListItem sx={{ p: "0", m: "0" }}>
                                    <ListItemButton>
                                        <ListItemText>
                                            <Typography
                                                sx={{
                                                    color: "black",
                                                    fontSize: "12px",
                                                    p: "0",
                                                    m: "0",
                                                    fontFamily: "mina",
                                                }}
                                            >
                                                Ready to wear - For Men(9)
                                            </Typography>
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Menu>
                    </>
                    <>
                        <MenuButton
                            onMouseEnter={handleMouseEnterButton2}
                            onMouseLeave={handleMouseLeaveButton2}
                            aria-controls={open2 ? "simple-menu2" : undefined}
                            aria-haspopup="true"
                        >
                            Line<span className="icon">{open2 ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                        </MenuButton>
                        <Menu
                            id="simple-menu2"
                            anchorEl={anchorEl2}
                            open={open2}
                            MenuListProps={{
                                onMouseEnter: handleMouseEnterMenu2,
                                onMouseLeave: handleMouseLeaveMenu2,
                            }}
                            PaperProps={{
                                sx: {
                                    mt: 2,
                                    boxShadow: "none",
                                    background: "#fff",
                                    width: "fit-content",
                                    borderRadius: "0",
                                },
                            }}
                        >
                            <List>
                                <ListItem sx={{ p: "0", m: "0" }}>
                                    <ListItemButton sx={{ background: "black" }}>
                                        <ListItemText>
                                            <Typography
                                                sx={{
                                                    color: "#fff",
                                                    fontSize: "12px",
                                                    p: "0",
                                                    m: "0",
                                                    fontFamily: "mina",
                                                }}
                                            >
                                                All
                                            </Typography>
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                                <ListItem sx={{ p: "0", m: "0" }}>
                                    <ListItemButton>
                                        <ListItemText>
                                            <Typography
                                                sx={{
                                                    color: "black",
                                                    fontSize: "12px",
                                                    p: "0",
                                                    m: "0",
                                                    fontFamily: "mina",
                                                }}
                                            >
                                                GG Marmont(5)
                                            </Typography>
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                                <ListItem sx={{ p: "0", m: "0" }}>
                                    <ListItemButton>
                                        <ListItemText>
                                            <Typography
                                                sx={{
                                                    color: "black",
                                                    fontSize: "12px",
                                                    p: "0",
                                                    m: "0",
                                                    fontFamily: "mina",
                                                }}
                                            >
                                                Gucci Ace(2)
                                            </Typography>
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                                <ListItem sx={{ p: "0", m: "0" }}>
                                    <ListItemButton>
                                        <ListItemText>
                                            <Typography
                                                sx={{
                                                    color: "black",
                                                    fontSize: "12px",
                                                    p: "0",
                                                    m: "0",
                                                    fontFamily: "mina",
                                                }}
                                            >
                                                Gucci Interlocking(2)
                                            </Typography>
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                                <ListItem sx={{ p: "0", m: "0" }}>
                                    <ListItemButton>
                                        <ListItemText>
                                            <Typography
                                                sx={{
                                                    color: "black",
                                                    fontSize: "12px",
                                                    p: "0",
                                                    m: "0",
                                                    fontFamily: "mina",
                                                }}
                                            >
                                                Gucci Re-Web(2)
                                            </Typography>
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                                <ListItem sx={{ p: "0", m: "0" }}>
                                    <ListItemButton>
                                        <ListItemText>
                                            <Typography
                                                sx={{
                                                    color: "black",
                                                    fontSize: "12px",
                                                    p: "0",
                                                    m: "0",
                                                    fontFamily: "mina",
                                                }}
                                            >
                                                Gucci Trademark(3)
                                            </Typography>
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                            </List>
                        </Menu>
                    </>
                    <>
                        <MenuButton
                            onMouseEnter={handleMouseEnterButton3}
                            onMouseLeave={handleMouseLeaveButton3}
                            aria-controls={open3 ? "simple-menu3" : undefined}
                            aria-haspopup="true"
                        >
                            Filters<span className="icon">{open3 ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                        </MenuButton>
                        <Menu
                            id="simple-menu3"
                            anchorEl={anchorEl3}
                            open={open3}
                            MenuListProps={{
                                onMouseEnter: handleMouseEnterMenu3,
                                onMouseLeave: handleMouseLeaveMenu3,
                            }}
                            PaperProps={{
                                sx: {
                                    mt: 2,
                                    boxShadow: "none",
                                    background: "#fff",
                                    width: "100%",
                                    borderRadius: "0",
                                },
                            }}
                        >
                            <List>
                                <ListItem sx={{}}>
                                    <Box sx={{ p: "0", m: "0", display: "flex", flexDirection: "column" }}>
                                        <Typography
                                            component={"label"}
                                            sx={{
                                                textAlign: "left",
                                                fontFamily: "mina",
                                                fontWeight: 700,
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            Color
                                        </Typography>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        defaultChecked
                                                        sx={{
                                                            color: "#000",
                                                            "&.Mui-checked": {
                                                                color: "#000",
                                                            },
                                                        }}
                                                    />
                                                }
                                                label="ALL"
                                                sx={{
                                                    "& .MuiSvgIcon-root": { fontSize: 19 },
                                                    "& .MuiFormControlLabel-label": { fontSize: "12px" },
                                                }}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        defaultChecked
                                                        sx={{
                                                            color: "#000",
                                                            "&.Mui-checked": {
                                                                color: "#000",
                                                            },
                                                        }}
                                                    />
                                                }
                                                label="ALL"
                                                sx={{
                                                    "& .MuiSvgIcon-root": { fontSize: 19 },
                                                    "& .MuiFormControlLabel-label": { fontSize: "12px" },
                                                }}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        defaultChecked
                                                        sx={{
                                                            color: "#000",
                                                            "&.Mui-checked": {
                                                                color: "#000",
                                                            },
                                                        }}
                                                    />
                                                }
                                                label="ALL"
                                                sx={{
                                                    "& .MuiSvgIcon-root": { fontSize: 19 },
                                                    "& .MuiFormControlLabel-label": { fontSize: "12px" },
                                                }}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        defaultChecked
                                                        sx={{
                                                            color: "#000",
                                                            "&.Mui-checked": {
                                                                color: "#000",
                                                            },
                                                        }}
                                                    />
                                                }
                                                label="ALL"
                                                sx={{
                                                    "& .MuiSvgIcon-root": { fontSize: 19 },
                                                    "& .MuiFormControlLabel-label": { fontSize: "12px" },
                                                }}
                                            />
                                        </FormGroup>
                                    </Box>
                                </ListItem>
                            </List>
                        </Menu>
                    </>
                    <>
                        <MenuButton
                            onMouseEnter={handleMouseEnterButton4}
                            onMouseLeave={handleMouseLeaveButton4}
                            aria-controls={open3 ? "simple-menu4" : undefined}
                            aria-haspopup="true"
                        >
                            <span style={{ fontSize: "12px", color: "#0000009d", textTransform: "lowercase" }}>
                                Sort by:{" "}
                            </span>
                            newest<span className="icon">{open4 ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                        </MenuButton>
                        <Menu
                            id="simple-menu4"
                            anchorEl={anchorEl4}
                            open={open4}
                            MenuListProps={{
                                onMouseEnter: handleMouseEnterMenu4,
                                onMouseLeave: handleMouseLeaveMenu4,
                            }}
                            PaperProps={{
                                sx: {
                                    mt: 2,
                                    boxShadow: "none",
                                    background: "#fff",
                                    width: "fit-content",
                                    borderRadius: "0",
                                },
                            }}
                        >
                            <List>
                                <ListItem sx={{ p: "0", m: "0" }}>
                                    <ListItemButton sx={{ background: "black" }}>
                                        <ListItemText>
                                            <Typography
                                                sx={{
                                                    color: "#fff",
                                                    fontSize: "12px",
                                                    p: "0",
                                                    m: "0",
                                                    fontFamily: "mina",
                                                }}
                                            >
                                                NEWEST
                                            </Typography>
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                                <ListItem sx={{ p: "0", m: "0" }}>
                                    <ListItemButton>
                                        <ListItemText>
                                            <Typography
                                                sx={{
                                                    color: "#000000",
                                                    fontSize: "12px",
                                                    p: "0",
                                                    m: "0",
                                                    fontFamily: "mina",
                                                }}
                                            >
                                                Price -High to low
                                            </Typography>
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                                <ListItem sx={{ p: "0", m: "0" }}>
                                    <ListItemButton>
                                        <ListItemText>
                                            <Typography
                                                sx={{
                                                    color: "#000000",
                                                    fontSize: "12px",
                                                    p: "0",
                                                    m: "0",
                                                    fontFamily: "mina",
                                                }}
                                            >
                                                Price - Low to High
                                            </Typography>
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Menu>
                    </>
                </FiltersBox>
            </FilterContainer>
        </div>
    );
};

export default FilterBox;
