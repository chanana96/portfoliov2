import { styled } from "@mui/material";
import {
    StyledDivider,
    StyledGenericContainer,
    StyledGenericRoot,
    StyledGenericSubText,
    StyledGenericTitle,
} from "../../styles/Styles";
import "animate.css";
import { useInView } from "react-intersection-observer";
import * as Scroll from "react-scroll";
import { useTranslation } from "react-i18next";
import { FaNodeJs, FaAws, FaReact, FaMicrosoft } from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";
import {
    SiMongodb,
    SiExpress,
    SiTypescript,
    SiAxios,
    SiSocketdotio,
    SiMysql,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandThreejs } from "react-icons/tb";

const StyledTechnologyItem = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    textAlign: "center",
});

const StyledScrollingBelt = styled("div")(({ theme }) => ({
    display: "flex",
    marginTop: "3rem",
    overflow: "hidden",
    width: "98%",
    marginLeft: "0.1rem",
    willChange: "transform",
    contain: "content",
}));
const StyledScrollingItem = styled("div")`
    @keyframes moveLeft {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-1600%);
        }
    }
    animation: moveLeft 22s linear infinite;
    background: ${({ theme }) => theme.palette.secondary.main};

    margin-right: 3rem;
    border-radius: 1rem;
    padding: 0.75rem;
    min-width: 7rem;
    text-align: center;
    font-weight: 600;
    ${({ theme }) => theme.breakpoints.down("md")} {
        margin-right: 2.2rem;
        padding: 0.7rem 0.5rem;
    }
    ${({ theme }) => theme.breakpoints.down("xs")} {
        margin-right: 1.6rem;
        padding: 0.5rem;
        min-width: 5rem;
    }
`;

export const About = () => {
    const [aboutContainer, aboutContainerInView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const technologiesArr = [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "React", icon: <FaReact /> },
        { name: "Mongo.db", icon: <SiMongodb /> },
        { name: "AWS", icon: <FaAws /> },
        { name: "C#", icon: <AiOutlineDotNet /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "Tailwindcss", icon: <RiTailwindCssFill /> },
        { name: "SQL", icon: <SiMysql /> },
        { name: "IIS", icon: <FaMicrosoft /> },
        { name: "Axios", icon: <SiAxios /> },
        { name: "Socket.io", icon: <SiSocketdotio /> },
        { name: "Three.js", icon: <TbBrandThreejs /> },
        { name: "Node.js", icon: <FaNodeJs /> },
    ];

    const { t } = useTranslation();

    return (
        <Scroll.Element name="About">
            <StyledGenericRoot>
                <StyledGenericContainer
                    style={{ overflow: "hidden" }}
                    ref={aboutContainer}
                    sx={aboutContainerInView ? { visibility: "visible" } : { visibility: "hidden" }}
                    className={aboutContainerInView ? "animate__animated animate__fadeInUp" : ""}
                >
                    <StyledGenericTitle variant="h1">
                        {t("about.title")}
                        <StyledDivider />
                    </StyledGenericTitle>

                    <StyledGenericSubText variant="h1">{t("about.text")}</StyledGenericSubText>

                    <StyledScrollingBelt>
                        {[...technologiesArr, ...technologiesArr].map((item, index) => (
                            <StyledScrollingItem key={`tech-${index}`}>
                                <StyledTechnologyItem>
                                    <span>{item.name}</span>
                                    <span style={{ fontSize: "1.5em" }}>{item.icon}</span>
                                </StyledTechnologyItem>
                            </StyledScrollingItem>
                        ))}
                    </StyledScrollingBelt>
                </StyledGenericContainer>
            </StyledGenericRoot>
        </Scroll.Element>
    );
};
