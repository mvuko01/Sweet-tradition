import Header from '../components/Header';
import Footer from '../components/Footer';
import FirstBanner from '../components/FirstBanner';
import FeaturingCandy from '../components/FeaturingCandy';
import StoryBanner from '../components/StoryBanner';
import BlogSection from '../components/BlogSection';
import AboutUs from '../components/AboutUs';


const Hello = () => {
    return (
        <>
            <Header />
            <FirstBanner />
            <FeaturingCandy />
            <StoryBanner />
            <AboutUs />
            {/* <BlogSection /> */}
            <Footer />
        </>
    );
};

export default Hello;