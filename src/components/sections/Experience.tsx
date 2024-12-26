import { Container, styled, useTheme } from "@mui/material";
import {
    StyledDivider,
    StyledGenericContainer,
    StyledGenericRoot,
    StyledGenericSubText,
    StyledGenericTitle,
} from "../../styles/Styles";
import Typography from "@mui/material/Typography";
import { useInView } from "react-intersection-observer";
import * as Scroll from "react-scroll";
import experienceData from "@config/content/experience.json";
import Slider from "react-slick";
import "animate.css";
import { useTranslation } from "react-i18next";
const StyledCarouselContainer = styled(Container)`
    margin-top: 3rem;
    align-items: center;
    width: 75% !important;
    box-sizing: unset !important;
    max-width: 1000px !important;
    text-align: center;
    ${({ theme }) => theme.breakpoints.down("sm")} {
        margin-bottom: 4rem;
        width: 80% !important;
    }
    ${({ theme }) => theme.breakpoints.down("xs")} {
        margin-bottom: 4rem;
        width: 90% !important;
    }
`;
const StyledCarouselCard = styled("div")`
    border-radius: 2rem !important;
    padding: 2rem 2rem;
    background-image: ${({ theme }) =>
        `radial-gradient(ellipse at center, ${theme.palette.secondary.main}10, ${theme.palette.secondary.main}40)`};
    ${({ theme }) => theme.breakpoints.down("sm")} {
        padding: 1.25rem 1.25rem;
    }
    max-width: 75%;
    border: ${({ theme }) => `0.25rem solid ${theme.palette.secondary.main}70`};
`;
const StyledCarouselTitle = styled(Typography)`
    font-size: clamp(28px, 4vw, 44px) !important;
    color: ${({ theme }) => theme.palette.text.secondary};
`;
const StyledCarouselSubTitle = styled(Typography)`
    font-size: clamp(18px, 2vw, 28px) !important;
    color: ${({ theme }) => theme.palette.text.primary};
`;
const StyledCarouselSubText = styled(Typography)`
    margin-top: 1rem !important;
    font-size: clamp(16px, 1.8vw, 24px) !important;
    color: ${({ theme }) => theme.palette.text.primary};
`;

const customDotsClass = "custom-dots-class";

export const Experience = () => {
    const theme = useTheme();

    const [experienceContainer, experienceContainerInView] = useInView({
        threshold: 0.4,
        triggerOnce: true,
    });
    const [s1, s1InView] = useInView({
        threshold: 0.8,
        triggerOnce: true,
    });

    const dotStyles = `
    .${customDotsClass} li button:before {
      font-size: 0.75rem;
      color: ${theme.palette.text.primary} !important;
      margin-top: 1rem;
      opacity: 0.4;
    }

    .${customDotsClass} li .slick-active button:focus:before  {
      opacity: 1 !important;
    }

    .${customDotsClass} li .slick-active button:before  {
      opacity: 1 !important;
    }
  `;

    const settings = {
        dots: true,
        autoplay: false,
        dotsClass: `slick-dots ${customDotsClass}`,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const { t } = useTranslation();
    return (
        <Scroll.Element name="Experience">
            <StyledGenericRoot ref={experienceContainer}>
                <StyledGenericContainer
                    sx={
                        experienceContainerInView
                            ? {
                                  visibility: "visible",
                                  opacity: 1,
                                  animation: "fadeInUp",
                                  animationDuration: "1s",
                              }
                            : { visibility: "hidden", opacity: 0 }
                    }
                >
                    <StyledGenericTitle variant="h1">
                        {t("experience.title")}
                        <StyledDivider />
                    </StyledGenericTitle>
                    <StyledGenericSubText variant="h1">{t("experience.text")}</StyledGenericSubText>
                </StyledGenericContainer>

                <StyledCarouselContainer
                    ref={s1}
                    sx={
                        s1InView
                            ? {
                                  visibility: "visible",
                                  animation: "fadeInUp",
                                  animationDuration: "1s",
                              }
                            : { visibility: "hidden" }
                    }
                >
                    <style>{dotStyles}</style>
                    <Slider {...settings}>
                        {experienceData.map((item) => (
                            <StyledCarouselCard key={item.id}>
                                <StyledCarouselTitle>
                                    {t(`experience.content.${item.id}.company`)}
                                </StyledCarouselTitle>
                                <StyledCarouselSubTitle>
                                    {t(`experience.content.${item.id}.jobTitle`)}
                                </StyledCarouselSubTitle>
                                <StyledCarouselSubTitle>{item.years}</StyledCarouselSubTitle>
                                <StyledCarouselSubText>
                                    {t(`experience.content.${item.id}.description`)}
                                </StyledCarouselSubText>
                            </StyledCarouselCard>
                        ))}
                    </Slider>
                </StyledCarouselContainer>
            </StyledGenericRoot>
        </Scroll.Element>
    );
};
