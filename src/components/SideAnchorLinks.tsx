import { emailSvgPath, githubSvgPath } from "@config/svg/SideAnchorPaths";
import { styled } from "@mui/material";
import { useTheme } from "@mui/material";

const StyledAnchorLink = styled("a")(({ theme }) => ({
    "& svg": {
        width: "2.2rem",
        cursor: "pointer",
        transition: "transform 0.2s ease-in-out",
        transform: "none",
    },
    "&:hover": {
        "& svg": {
            fill: theme.palette.text.secondary + " !important",
            transform: "scale(1.2)",
        },
    },
}));

const StyledLeftAnchor = styled("div")({
    width: "40px",
    position: "fixed",
    bottom: "16vh",
    left: "50px",
    right: "auto",
    Zndex: "10",
    animation: "fadeInLeft",
    animationDuration: "1s",
});

export const SideAnchorLinks = () => {
    const theme = useTheme();

    return (
        <>
            <StyledLeftAnchor>
                <StyledAnchorLink
                    href="https://github.com/chanana96"
                    target="_blank"
                    aria-label="Github"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        width="44px"
                        height="44px"
                        fillRule="evenodd"
                        fill={theme.palette.text.primary}
                    >
                        <title>Github</title>
                        <path fillRule="evenodd" d={githubSvgPath} />
                    </svg>
                </StyledAnchorLink>
                <StyledAnchorLink
                    href="mailto:chan.kim105@gmail.com"
                    sx={{ transform: "scale(0.90)" }}
                >
                    <svg
                        fill={theme.palette.text.primary}
                        height="44px"
                        width="44px"
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
                </StyledAnchorLink>
            </StyledLeftAnchor>
        </>
    );
};
