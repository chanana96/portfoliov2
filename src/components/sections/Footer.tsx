import "animate.css";
import { useInView } from "react-intersection-observer";
import { List, styled, useTheme, useMediaQuery } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTranslation } from "react-i18next";
import { emailSvgPath, githubSvgPath, linkedInSvgPath } from "@config/svg/SideAnchorPaths";

const StyledFooterRoot = styled("footer")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    width: "100%",
    padding: "2rem 0 1rem 0",
    marginTop: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
}));

const StyledSourceLink = styled("a")(({ theme }) => ({
    "color": theme.palette.text.primary,
    "textDecoration": "none",
    "display": "flex",
    "alignItems": "center",
    "gap": "0.5rem",
    "fontSize": "0.8rem",
    "opacity": 0.8,
    "transition": "opacity 0.2s",
    "&:hover": {
        opacity: 1,
    },
}));

const StyledFooterList = styled(List)({
    display: "block",
});
const StyledListItemLink = styled("a")(({ theme }) => ({
    justifyContent: "center",
    padding: "0.4rem",
    width: "0",
}));

export const Footer = () => {
    const { t } = useTranslation();
    const theme = useTheme();
    const lg = useMediaQuery(theme.breakpoints.down("lg"));
    const [footer, footerInView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <StyledFooterRoot ref={footer}>
            <div
                style={footerInView ? { visibility: "visible" } : { visibility: "hidden" }}
                className={footerInView ? "animate__animated animate__fadeInUp" : ""}
            >
                {lg && (
                    <StyledFooterList>
                        <StyledListItemLink
                            sx={{ marginRight: "-0.3rem" }}
                            href="https://www.linkedin.com/in/"
                            target="_blank"
                        >
                            <svg
                                fill={theme.palette.text.primary}
                                width="32px"
                                height="32px"
                                viewBox="-5.5 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>LinkedIn</title>
                                <path d={linkedInSvgPath} />
                            </svg>
                        </StyledListItemLink>
                        <StyledListItemLink href="https://github.com/chanana96" target="_blank">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                width="32px"
                                height="32px"
                                fillRule="evenodd"
                                fill={theme.palette.text.primary}
                            >
                                <title>Github</title>
                                <path fillRule="evenodd" d={githubSvgPath} />
                            </svg>
                        </StyledListItemLink>
                        <StyledListItemLink
                            href="mailto:chan.kim105@gmail.com"
                            sx={{ transform: "scale(0.95)" }}
                        >
                            <svg
                                fill={theme.palette.text.primary}
                                height="32px"
                                width="32px"
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 75.294 75.294"
                                xmlSpace="preserve"
                            >
                                <title>Email</title>
                                <g>
                                    <path d={emailSvgPath} />
                                </g>
                            </svg>
                        </StyledListItemLink>
                    </StyledFooterList>
                )}
            </div>
            <StyledSourceLink
                href="https://github.com/chanana96/portfolio"
                target="_blank"
                rel="noopener noreferrer"
            >
                <GitHubIcon fontSize="medium" />
                {t("source")}
            </StyledSourceLink>
        </StyledFooterRoot>
    );
};
