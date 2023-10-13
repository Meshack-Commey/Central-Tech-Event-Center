import EveryThingYouNeedForASuccessfulEvent from "../components/EveryThingYouNeedForASuccessfulEvent"
import HeroSection from "../components/HeroSection"
import OpenAndAvailableForAllEventOccasion from "../components/OpenAndAvailableForAllEventOccasion"
import OurSpaceYourVision from "../components/OurSpaceYourVision"
import TopEventVenueSection from "../components/TopEventVenueSection"
import TopOfTheLineAmenities from "../components/TopOfTheLineAmenities"
import CelebrateWithYourCommunity from "../components/CelebrateWithYourCommunity"
// import QualityAffordableEventSpace from "../components/QualityAffordableEventSpace"
// import ContactUs from "../components/ContactUs"



const LandingPage = () => {
    return (
        <>
            <HeroSection />
            <TopEventVenueSection />
            <EveryThingYouNeedForASuccessfulEvent />   
            <OpenAndAvailableForAllEventOccasion />             
            <OurSpaceYourVision /> 
            <TopOfTheLineAmenities /> 
            <CelebrateWithYourCommunity /> {/*
            <QualityAffordableEventSpace />
            <ContactUs />   */}
        </>
    )
}

export default LandingPage