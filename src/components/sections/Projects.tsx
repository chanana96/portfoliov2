import { Typography, Container, Grid, styled } from "@mui/material";
import {
    StyledDivider,
    StyledGenericContainer,
    StyledGenericRoot,
    StyledGenericSubText,
    StyledGenericTitle,
} from "@styles/Styles";
import "animate.css";
import { useInView, InView } from "react-intersection-observer";
import * as Scroll from "react-scroll";
import projects from "@config/content/projects.json";
import { useState } from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTranslation } from "react-i18next";

interface StyledProjectsGridItemProps {
    inView?: boolean;
    isActive?: boolean;
}
const StyledProjectsContainer = styled(Container)`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    box-sizing: unset !important;
    max-width: 1000px !important;
    text-align: center;
    justify-content: center;
    ${({ theme }) => `
        ${theme.breakpoints.down("sm")} {
            width: 85% !important;
        }
        ${theme.breakpoints.down("xs")} {
            width: 90% !important;
        }
    `}
`;
const StyledProjectsGrid = styled(Grid)(({ theme }) => ({
    justifyContent: "space-around",
    width: "100%",
    marginLeft: "0 !important",
    marginTop: "0 !important",
    padding: "1rem",
}));
interface StyledProjectsGridItemProps {
    inView?: boolean;
}

const StyledProjectsGridItem = styled(Grid, {
    shouldForwardProp: (prop) => !["inView", "isActive"].includes(prop as string),
})<StyledProjectsGridItemProps>`
    position: relative;
    display: flex;
    height: 280px;
    margin-bottom: 2.5rem;
    border-radius: 1rem;
    border: ${({ theme }) => `0.25rem solid ${theme.palette.secondary.main}70`};
    background-color: ${({ theme }) => `${theme.palette.background.default}70`};

    padding-top: 0 !important;
    padding-left: 0 !important;
    overflow: hidden;
    align-items: flex-end;
    transform: none;
    transition: transform 150ms ease-in-out 0s;

    ${({ theme }) => theme.breakpoints.up("md")} {
        &:hover {
            transform: scale(1.02);
            transition: transform 150ms ease-in-out 0s;

            &::after {
                opacity: 0.9;
                content: "";
                position: absolute;
                inset: 0px;
                background: linear-gradient(rgba(0, 0, 0, 0.1) 10%, rgba(0, 0, 0, 0.78) 70%);
            }

            & div {
                opacity: 1;
                transform: translateY(-10%);
                transition:
                    opacity 300ms ease-in-out 0s,
                    transform 300ms ease-in-out 0s;
            }
        }
    }

    ${({ theme, isActive }) => theme.breakpoints.down("md")} {
        ${({ isActive }) =>
            isActive &&
            `
            transform: scale(1.02);
            
            &::after {
                opacity: 0.9;
                content: "";
                position: absolute;
                inset: 0px;
                background: linear-gradient(rgba(0, 0, 0, 0.1) 10%, rgba(0, 0, 0, 0.78) 70%);
            }

            & div {
                opacity: 1;
                transform: translateY(-10%);
            }
        `}
    }
`;
const StyledProjectsImg = styled("img")(({ theme }) => ({
    transform: "scale(1.01)",

    height: "100%",
    width: "100%",
    position: "absolute",
    objectFit: "cover",
}));
const StyledProjectsTextField = styled("div")(({ theme }) => ({
    zIndex: "1000 !important",
    transition: "opacity 300ms ease-in-out 0s, transform 300ms ease-in-out 0s",
    transform: "none",
    opacity: "0",
    padding: "0rem 1rem",
    color: "white",
    textAlign: "left",
    [theme.breakpoints.down("lg")]: {
        transform: "none",
        padding: "1rem 1rem",
    },
}));
const StyledProjectsTitle = styled(Typography)(({ theme }) => ({
    fontSize: "1.5rem !important",
    fontWeight: "600",
}));
const StyledProjectsSubText = styled(Typography)(({ theme }) => ({
    fontSize: "1rem !important",
    [theme.breakpoints.down("sm")]: {
        fontSize: "0.8rem !important",
    },
}));
const StyledProjectsSkillContainer = styled("div")(({ theme }) => ({
    marginTop: "0.5rem",
    display: "flex",
    flexWrap: "wrap",
    rowGap: "0.4rem",
}));
const StyledProjectsSkillText = styled(Typography)(({ theme }) => ({
    fontSize: "0.8rem !important",
    background: "white",
    marginRight: "0.5rem",
    padding: "0.1rem 0.4rem",
    borderRadius: "0.5rem",
    color: "black",
    fontWeight: "600",
    [theme.breakpoints.down("sm")]: {
        fontSize: "0.7rem !important",
    },
}));
const StyledProjectsOpenLink = styled("a")({
    "color": "inherit",
    "& svg": {
        padding: "0",
        minWidth: "0",
        marginTop: "0.5rem",
        marginRight: "0.5rem",
        transform: "none",
        transition: "transform 200ms",
    },
    "&:hover": {
        "& svg": {
            transform: "scale(1.15)",
        },
    },
});
const StyledProjectsGHLink = styled("a")({
    "color": "inherit",
    "& svg": {
        padding: "0",
        minWidth: "0",
        marginTop: "0.43rem",
        transform: "scale(0.90)",
        transition: "transform 200ms",
    },
    "&:hover": {
        "& svg": {
            transform: "scale(1.15)",
        },
    },
});

export const Projects = () => {
    const [projectsContainer, projectsContainerInView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });
    const { t } = useTranslation();
    const [activeProjectId, setActiveProjectId] = useState<number | null>(null);
    const handleProjectClick = (projectId: number) => {
        setActiveProjectId(activeProjectId === projectId ? null : projectId);
    };

    return (
        <Scroll.Element name="Projects">
            <StyledGenericRoot ref={projectsContainer}>
                <StyledGenericContainer
                    sx={
                        projectsContainerInView
                            ? { visibility: "visible" }
                            : { visibility: "hidden" }
                    }
                    className={projectsContainerInView ? "animate__animated animate__fadeInUp" : ""}
                >
                    <StyledGenericTitle variant="h1">
                        {t("projects.title")}
                        <StyledDivider />
                    </StyledGenericTitle>
                    <StyledGenericSubText variant="h1">{t("projects.text")}</StyledGenericSubText>
                </StyledGenericContainer>
                <StyledProjectsContainer>
                    <StyledProjectsGrid container rowSpacing={6} columnSpacing={12}>
                        {projects.map((project) => (
                            <InView key={project.id} threshold={0.9} triggerOnce={true}>
                                {({ ref, inView }) => (
                                    <StyledProjectsGridItem
                                        item
                                        xs={12}
                                        sm={5.5}
                                        ref={ref}
                                        inView={inView}
                                        isActive={activeProjectId === project.id}
                                        onClick={() => handleProjectClick(project.id)}
                                        sx={
                                            inView
                                                ? {
                                                      visibility: "visible",
                                                      animation: "fadeInUp",
                                                      animationDuration: "1s",
                                                  }
                                                : { visibility: "hidden" }
                                        }
                                    >
                                        <StyledProjectsImg
                                            alt={`Image of ${project.title}`}
                                            src={project.image}
                                            referrerPolicy="no-referrer"
                                        />
                                        <StyledProjectsTextField>
                                            <StyledProjectsTitle>
                                                {project.title}
                                            </StyledProjectsTitle>
                                            <StyledProjectsSubText>
                                                {t(`projects.content.${project.id}.description`)}
                                            </StyledProjectsSubText>
                                            <StyledProjectsSkillContainer>
                                                {project.skills.map((skill, index) => (
                                                    <StyledProjectsSkillText key={index}>
                                                        {skill}
                                                    </StyledProjectsSkillText>
                                                ))}
                                            </StyledProjectsSkillContainer>
                                            {project.websiteLink && (
                                                <StyledProjectsOpenLink
                                                    href={project.websiteLink}
                                                    target="_blank"
                                                >
                                                    <LaunchIcon />
                                                </StyledProjectsOpenLink>
                                            )}
                                            {project.githubLink && (
                                                <StyledProjectsGHLink
                                                    href={project.githubLink}
                                                    target="_blank"
                                                >
                                                    <GitHubIcon />
                                                </StyledProjectsGHLink>
                                            )}
                                        </StyledProjectsTextField>
                                    </StyledProjectsGridItem>
                                )}
                            </InView>
                        ))}
                    </StyledProjectsGrid>
                </StyledProjectsContainer>
            </StyledGenericRoot>
        </Scroll.Element>
    );
};
