import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "@contexts/ThemeContext";

import navbarData from "@config/content/navbar.json";

import MenuIcon from "@mui/icons-material/Menu";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LanguageIcon from "@mui/icons-material/Language";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
import { styled } from "@mui/material/styles";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const StyledAppBarContainer = styled("div")(({ theme }) => ({
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    placeSelf: "center",
    justifyContent: "center",
    maxWidth: "1200px",
    width: "90vw !important",
    [theme.breakpoints.down("sm")]: {
        width: "100vw !important",
    },
}));
const StyledAppBar = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== "isScrolled",
})<{ isScrolled: boolean }>(({ theme, isScrolled }) => ({
    transition: "all 0.4s cubic-bezier(0.645,0.045,0.355,1), background-color 0ms !important",
    transitionDelay: "0.1s",
    boxShadow: isScrolled
        ? "1px 0px 4px -1px rgb(0 0 0 / 20%), 0px 2px 20px 0px rgb(0 0 0 / 14%), 1px -1px 12px 0px rgb(0 0 0 / 12%) !important"
        : "none !important",
    backgroundColor: theme.palette.background.default + " !important",
    padding: isScrolled ? "0.5rem 5rem 0.5rem 5rem" : "2rem 5rem 2rem 5rem",
    [theme.breakpoints.down("sm")]: {
        padding: isScrolled ? "0.5rem 2rem 0.5rem 2rem" : "1rem 2rem 1rem 2rem",
    },
}));
const StyledAppBarLink = styled(Link)`
    text-decoration: none;
    & p {
        color: ${({ theme }) => theme.palette.text.primary} !important;
        transform: none;
        transition: transform 150ms ease-in-out 0s !important;
        cursor: pointer;
        font-size: 1.2rem;
        padding: 1rem;
        &:hover {
            color: ${({ theme }) => theme.palette.action.hover} !important;
            transform: translateY(-2px);
        }
    }
`;
const StyledAppBarButton = styled(Button)`
    padding: 10px 8px;
    color: ${({ theme }) => theme.palette.text.primary} !important;
    transform: none;
    transition: transform 150ms ease-in-out 0s !important;
    cursor: pointer;
    &:hover {
        color: ${({ theme }) => theme.palette.action.hover} !important;
        transform: translateY(-2px);
    }
`;
const StyledAppBarDrawerLink = styled(Link)`
    & p {
        animation: fadeIn;
        animation-duration: 2s;
        color: ${({ theme }) => theme.palette.text.primary} !important;
        cursor: pointer;
        font-size: 1.75rem;
        padding: 0;
        &:hover {
            color: ${({ theme }) => theme.palette.action.hover} !important;
        }
    }
`;
const StyledLogoTypography = styled(Typography)(({ theme }) => ({
    fontSize: "1.5rem",
    fontWeight: 700,
    letterSpacing: "0.1rem",
    color: theme.palette.text.primary,
    animationName: "fadeInDown",
    animationDuration: "1s",
}));
const StyledDrawerIcon = styled(MenuIcon)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: "2rem !important",
    zIndex: "3 !important",
}));
const StyledDrawerCloseIcon = styled(CloseIcon)(({ theme }) => ({
    animation: "fadeIn",
    animationDuration: "1s",
    position: "fixed",
    top: "32px",
    right: "32px",
    color: theme.palette.text.primary,
    fontSize: "2rem !important",
    zIndex: "3 !important",
}));
const StyledDrawer = styled(Drawer)(({ theme }) => ({
    "& div.MuiPaper-root": {
        background: "transparent",
        backdropFilter: "blur(10px)",
        height: "100vh !important",
        boxShadow: "none !important",
        textAlign: "center",
        justifyContent: "center",
        color: theme.palette.text.primary,
        zIndex: "2 !important",
    },
}));
const StyledDrawerList = styled(List)(({ theme }) => ({
    display: "flex",
}));

export const Navbar = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const [hasAnimated, setHasAnimated] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const MuiTheme = useTheme();
    const collapse = useMediaQuery(MuiTheme.breakpoints.down("sm"));
    useEffect(() => {
        setTimeout(() => {
            setHasAnimated(true);
        }, 1000);
    }, []);

    useEffect(() => {
        function handleScroll() {
            const scrollY = window.scrollY;
            if (scrollY > 60) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        window.localStorage.setItem("theme", theme);
    }, [theme]);

    const trigger = useScrollTrigger({
        target: window,
    });

    const toggleDrawer = (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" ||
                (event as React.KeyboardEvent).key === "Shift")
        ) {
            return;
        }
        setIsOpen(isOpen);
    };
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const drawer = (
        <>
            <Button
                onClick={toggleDrawer(true)}
                sx={{
                    animation: !hasAnimated ? "fadeIn" : "",
                    animationDuration: "2s",
                }}
            >
                <StyledDrawerIcon />
            </Button>

            <StyledDrawer
                anchor={"top"}
                variant="temporary"
                transitionDuration={1}
                disableScrollLock={true}
                open={isOpen}
                onClose={toggleDrawer(false)}
            >
                <Button onClick={toggleDrawer(false)}>
                    <StyledDrawerCloseIcon />
                </Button>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                    role="presentation"
                    onKeyDown={toggleDrawer(false)}
                >
                    {navbarData.map((data) => (
                        <StyledDrawerList key={data.id}>
                            <StyledAppBarDrawerLink
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                                to={data.route}
                                smooth={true}
                                duration={1000}
                            >
                                <Typography>{t(`navbar.content.${data.id}.name`)}</Typography>
                            </StyledAppBarDrawerLink>
                        </StyledDrawerList>
                    ))}
                    <List>
                        <StyledAppBarButton
                            aria-label="Change language"
                            onClick={() => changeLanguage(i18n.language === "en" ? "ko" : "en")}
                        >
                            <LanguageIcon />
                        </StyledAppBarButton>
                        <Button
                            sx={{
                                color: MuiTheme.palette.text.primary,
                                animation: "fadeIn",
                                animationDuration: "2s",
                            }}
                            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        >
                            {theme === "light" ? <WbSunnyIcon /> : <DarkModeIcon />}
                        </Button>
                    </List>
                </Box>
            </StyledDrawer>
        </>
    );

    const navbar = (
        <>
            {navbarData.map((data) => (
                <div
                    key={data.id}
                    className={!hasAnimated ? "animate__animated animate__fadeInDown" : ""}
                >
                    <StyledAppBarLink
                        href={`#${data.route}`}
                        to={data.route}
                        smooth={true}
                        duration={1000}
                    >
                        <Typography>{t(`navbar.content.${data.id}.name`)}</Typography>
                    </StyledAppBarLink>
                </div>
            ))}

            <div
                style={{ paddingLeft: "4px" }}
                className={!hasAnimated ? "animate__animated animate__fadeInDown" : ""}
            >
                <StyledAppBarButton
                    aria-label="Change language"
                    onClick={() => changeLanguage(i18n.language === "en" ? "ko" : "en")}
                >
                    <LanguageIcon />
                </StyledAppBarButton>
                <StyledAppBarButton
                    aria-label="Change theme"
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                    {theme === "light" ? <WbSunnyIcon /> : <DarkModeIcon />}
                </StyledAppBarButton>
            </div>
        </>
    );

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <StyledAppBar position="fixed" isScrolled={isScrolled}>
                <StyledAppBarContainer>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            style={{
                                marginRight: "auto",
                            }}
                        >
                            <StyledLogoTypography>Woo Jin Kim</StyledLogoTypography>
                        </Typography>
                        {collapse ? drawer : navbar}
                    </Toolbar>
                </StyledAppBarContainer>
            </StyledAppBar>
        </Slide>
    );
};
