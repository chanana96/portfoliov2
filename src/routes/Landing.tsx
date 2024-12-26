import { useState, useEffect } from "react";
import { Container, useMediaQuery, styled, useTheme } from "@mui/material";
import woojinAvatar from "@assets/woojin.jpg";
import { Hero, About, Experience, Projects, Hobbies, Footer } from "@components/sections/index";
import { Loader } from "@components/Loader";
import { Navbar } from "@components/Navbar";
import { SideAnchorLinks } from "@components/SideAnchorLinks";

const StyledMainPage = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    overflow: "hidden",
}));
const StyledMainContainer = styled(Container)({
    maxWidth: "1600px",
});

export const Landing = () => {
    const theme = useTheme();
    const showSideAnchor = useMediaQuery(theme.breakpoints.up("lg"));
    const [isLoading, setIsloading] = useState(true);
    const [heroImg, setHeroImg] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            setIsloading(false);
        }, 700);

        const loadImage = async () => {
            const img = new Image();
            img.src = woojinAvatar;
            await img.decode();
            setHeroImg(woojinAvatar);
        };
        loadImage();
    }, []);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Navbar />
                    <StyledMainPage>
                        {showSideAnchor && <SideAnchorLinks />}
                        <StyledMainContainer>
                            <Hero img={heroImg} />
                            <About />
                            <Projects />
                            <Experience />
                            <Hobbies />
                            <Footer />
                        </StyledMainContainer>
                    </StyledMainPage>
                </>
            )}
        </>
    );
};
