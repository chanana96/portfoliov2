import { useEffect, useState } from "react";
import { Container, Grid2 as Grid, Typography, styled } from "@mui/material";
import "animate.css";
import { useTranslation } from "react-i18next";
import { useWakaTime } from "@hooks/useWakaTime";

const StyledHeroRoot = styled("section")(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
}));

interface StyledHeroContainerProps {
    ismobile: boolean;
}

const StyledHeroContainer = styled(Container, {
    shouldForwardProp: (prop) => prop !== "ismobile",
})<StyledHeroContainerProps>`
    display: flex !important;
    flex: 1;
    align-items: center;
    align-self: center;
    box-sizing: unset !important;
    width: unset;
    @media (max-height: 804px) {
        padding-top: ${(props) => (props.ismobile ? "0px" : "102px")};
    }
    ${({ theme }) => theme.breakpoints.up("sm")} {
        margin-top: 2rem;
    }
`;

interface StyledHeroGridProps {
    ismobile: boolean;
}

const StyledHeroGrid = styled(Grid, {
    shouldForwardProp: (prop) => prop !== "ismobile",
})<StyledHeroGridProps>`
    align-items: center;
    justify-content: space-around;
    width: auto;
    margin-bottom: ${(props) => (props.ismobile ? "3.5rem" : "0rem")};
`;

const StyledHeroImage = styled("img")`
    animation: fadeIn;
    animation-duration: 1s;
    width: 270px;
    border-radius: 2rem;
    border: ${({ theme }) => `0.3rem solid ${theme.palette.secondary.main}90`};
    background-color: ${({ theme }) => `${theme.palette.background.default}70`};
    text-align: center;
    margin: 2rem 4rem 2rem 4rem;
    ${({ theme }) => theme.breakpoints.down("lg")} {
        width: 220px;
    }
    ${({ theme }) => theme.breakpoints.down("xs")} {
        width: 57vw;
    }
`;

const StyledHeroText = styled(Grid)(({ theme }) => ({
    textAlign: "center",
    animation: "fadeIn",
    animationDuration: "1s",
    width: "50%",
    paddingLeft: "0 !important",
    [theme.breakpoints.down("sm")]: {
        width: "80%",
        margin: "0",
    },
    margin: "2rem 4rem 2rem 4rem ",
}));

const StyledHeroTitle = styled(Typography)`
    font-weight: bold !important;
    color: ${({ theme }) => theme.palette.text.primary};
    margin-bottom: ${({ theme }) => theme.spacing(0)};
    font-size: clamp(34px, 4vw, 55px) !important;
    ${({ theme }) => theme.breakpoints.up("md")} {
        white-space: nowrap;
    }
`;

const StyledHeroSubText = styled(Typography)`
    color: ${({ theme }) => theme.palette.text.secondary} !important;
    font-size: clamp(20px, 2vw, 26px) !important;
    width: 75%;
    margin: 0 auto;
    display: block;
`;

const ScrollerIcon = styled("div")`
    @keyframes wheel {
        to {
            opacity: 0;
            top: 2.4rem;
        }
    }
    width: 1.5rem;
    height: 3rem;
    border-radius: 2rem;
    position: relative;
    margin-bottom: 4rem;
    margin-top: 1rem;
    border: ${({ theme }) => `3px solid ${theme.palette.text.primary}`} !important;
    &::before {
        content: "";
        width: 0.3rem;
        height: 0.3rem;
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50%;
        opacity: 1;
        background-color: ${({ theme }) => theme.palette.text.primary} !important;
        webkit-animation: wheel 2s infinite;
        animation: wheel 1.6s infinite;
    }
`;
const StyledTimeStats = styled("span")`
    position: relative;
    cursor: help;
    font-weight: 600;
    color: ${({ theme }) => theme.palette.text.secondary}
    transition: color 0.2s ease;

    &:hover {
        color: ${({ theme }) => theme.palette.action.hover};
    }
    &:hover::after {
        content: "powered by WakaTime";
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -20px;
        font-size: 0.8rem;
        white-space: nowrap;
        opacity: 0.7;
        color: ${({ theme }) => theme.palette.text.secondary};
    }
`;
export const Hero = ({ img }: { img: string }) => {
    const [isMobile, setIsMobile] = useState(false);
    const { timeStats, loading, error } = useWakaTime();
    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const isMobileDevice = /mobile|android|ios|iphone|ipad|ipod|windows phone/i.test(userAgent);
        setIsMobile(isMobileDevice);
    }, []);
    const { t } = useTranslation();

    return (
        <StyledHeroRoot>
            <StyledHeroContainer ismobile={isMobile}>
                <StyledHeroGrid ismobile={isMobile} container spacing={0}>
                    <Grid style={{ paddingLeft: "0 !important" }}>
                        <StyledHeroImage alt="Image of Woo Jin" src={img} />
                    </Grid>
                    <StyledHeroText>
                        <StyledHeroTitle variant="h2">{t("hero.title")}</StyledHeroTitle>
                        <StyledHeroSubText variant="h5">{t("hero.text")}</StyledHeroSubText>
                        {loading ? (
                            t("hero.wakatime.loading")
                        ) : error ? (
                            ""
                        ) : (
                            <>
                                {t("hero.wakatime.prefix")}{" "}
                                <StyledTimeStats data-tooltip={t("hero.wakatime.powered")}>
                                    {timeStats?.hours} {t("hero.wakatime.hours")}{" "}
                                    {timeStats?.minutes} {t("hero.wakatime.minutes")}
                                </StyledTimeStats>{" "}
                                {t("hero.wakatime.suffix")}
                            </>
                        )}
                    </StyledHeroText>
                </StyledHeroGrid>
            </StyledHeroContainer>
            {isMobile ? (
                <></>
            ) : (
                <div
                    style={{
                        marginTop: "2rem",
                        animation: "fadeInUp",
                        animationDuration: "1s",
                    }}
                >
                    <ScrollerIcon />
                </div>
            )}
        </StyledHeroRoot>
    );
};
