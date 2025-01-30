import { useTheme, Typography, styled, useMediaQuery, Grid2 as Grid } from "@mui/material";
import {
    StyledDivider,
    StyledGenericContainer,
    StyledGenericRoot,
    StyledGenericSubText,
    StyledGenericTitle,
} from "../../styles/Styles";
import hobbiesData from "@config/content/hobbies.json";

import { motion } from "framer-motion";
import { useInView, InView } from "react-intersection-observer";
import * as Scroll from "react-scroll";
import { LiftingSvgPath } from "@config/svg/LiftingSvgPath";
import { SC2SvgPath } from "@config/svg/SC2SvgPath";
import { ChessSvgPath } from "@config/svg/ChessSvgPath";
import "animate.css";
import { useTranslation } from "react-i18next";

const StyledHobbiesGrid = styled(Grid)({
    padding: "2rem 0rem 2rem 0rem",
    justifyContent: "center",
    animation: "fadeInUp",
    animationDuration: "1s",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
});
const StyledHobbiesGridTitle = styled(Typography)`
    font-size: clamp(26px, 2vw, 30px) !important;
    color: ${({ theme }) => theme.palette.text.primary};
    text-align: center;
    margin-top: 1rem !important;
`;
const StyledHobbiesGridSubText = styled(Typography)`
    font-size: clamp(16px, 1.5vw, 18px) !important;
    color: ${({ theme }) => theme.palette.text.secondary};
    text-align: center;
`;

const StyledHobbiesGridItem = styled(Grid)`
    display: flex;
    flex-direction: column !important;
    align-items: center;
    padding: 4rem 2rem 4rem 2rem !important;
    ${({ theme }) => theme.breakpoints.down("sm")} {
        padding: 2rem 2rem 2rem 2rem !important;
    }
    text-align: center;
    color: ${({ theme }) => theme.palette.text.primary};
    min-width: 300px;
    flex: 1;
    max-width: 400px;
`;

const pathVariants = (animationDuration: number) => ({
    hidden: {
        opacity: 0.5,
        pathLength: 0,
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: animationDuration,
            ease: "easeIn",
        },
    },
});

export const Hobbies = () => {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down("md"));
    const paths = [SC2SvgPath, ChessSvgPath, LiftingSvgPath];

    const [hobbiesContainer, hobbiesContainerInView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });
    const { t } = useTranslation();

    return (
        <Scroll.Element name="Hobbies">
            <StyledGenericRoot ref={hobbiesContainer}>
                <StyledGenericContainer>
                    <div
                        style={
                            hobbiesContainerInView
                                ? { visibility: "visible" }
                                : { visibility: "hidden" }
                        }
                        className={
                            hobbiesContainerInView ? "animate__animated animate__fadeInUp" : ""
                        }
                    >
                        <StyledGenericTitle variant="h1">
                            {t("hobbies.title")}
                            <StyledDivider />
                        </StyledGenericTitle>
                        <StyledGenericSubText variant="h1">
                            {t("hobbies.text")}
                        </StyledGenericSubText>
                    </div>

                    <StyledHobbiesGrid container spacing={1}>
                        {hobbiesData.map((hobby) => (
                            <InView key={hobby.id} threshold={0.8} triggerOnce={true}>
                                {({ ref, inView }) => (
                                    <StyledHobbiesGridItem sx={{ xs: 12, sm: 4 }} ref={ref}>
                                        <div
                                            style={
                                                inView
                                                    ? { visibility: "visible" }
                                                    : { visibility: "hidden" }
                                            }
                                            className={
                                                inView ? "animate__animated animate__fadeInUp" : ""
                                            }
                                        >
                                            <motion.svg
                                                viewBox={hobby.viewBox}
                                                width={sm ? hobby.smallWidth : hobby.largeWidth}
                                                height={sm ? hobby.smallHeight : hobby.largeHeight}
                                                initial="hidden"
                                                animate={inView ? "visible" : ""}
                                            >
                                                <motion.path
                                                    d={paths[hobby.id]}
                                                    fill="none"
                                                    transform={hobby.transform}
                                                    variants={pathVariants(hobby.animationDuration)}
                                                    stroke={theme.palette.text.primary}
                                                    strokeWidth={hobby.strokeWidth}
                                                ></motion.path>
                                            </motion.svg>
                                            <StyledHobbiesGridTitle>
                                                {t(`hobbies.content.${hobby.id}.name`)}
                                            </StyledHobbiesGridTitle>
                                            <StyledHobbiesGridSubText>
                                                {t(`hobbies.content.${hobby.id}.description`)}
                                            </StyledHobbiesGridSubText>
                                        </div>
                                    </StyledHobbiesGridItem>
                                )}
                            </InView>
                        ))}
                    </StyledHobbiesGrid>
                </StyledGenericContainer>
            </StyledGenericRoot>
        </Scroll.Element>
    );
};
