import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavigationBar from "./components/NavigationBar"
import LandingPage from "./pages/LandingPage"
import Footer from "./components/Footer"
import BookingsComponents from "./components/BookingsComponents"
import PricingComponents from "./components/PricingComponents"
import GalleryComponents from "./components/GalleryComponents"
import ContactUsComponents from "./components/ContactUsComponents"


const EventCenterApp = () => {
    return (
        <BrowserRouter>


            <NavigationBar /> 
            
            <Routes>
                <Route path="/" element={ <LandingPage /> } />
                <Route path="bookings" element={ <BookingsComponents /> } />
                <Route path="pricing" element={ <PricingComponents /> } />
                <Route path="gallery" element={ <GalleryComponents /> } />
                <Route path="contact" element={ <ContactUsComponents /> } />
            </Routes>

            <Footer />

        </BrowserRouter>
    )
}



export default EventCenterApp