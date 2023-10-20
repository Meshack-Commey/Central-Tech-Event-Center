import styled from "styled-components"
import { Link } from "react-router-dom"
import HeroPic from '../assets/herobg.jpg'

const HeroSection = () => {
    return (
        <>
        <CONTAINER>
            <ROW>
                <HEROBOX>
                    <HEROTEXT> the perfect place to create lasting memories </HEROTEXT>
                    <HEROPARAGRAPH>At Central Tech Event Center, we understand that memorable occasions deserve a special place to be celebrated. Our venue is the perfect location for any event.</HEROPARAGRAPH>
                    <LINK to={"bookings"} > <BUTTON>Book Now</BUTTON> </LINK>
                </HEROBOX>
            </ROW>
        </CONTAINER>
        </>
    )
}



// styled components
const CONTAINER = styled.div`
    border: 1px solid inherit;
    width: 100%;
    background-image: url(${HeroPic});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    background-attachment: sticky;
    position: relative;
    z-index: 1;
    &:after {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        content: "";
        z-index: -1;
        background: rgba(0, 139, 139, 0.5);
        width: 100%;
        height: 100%;
    }

    @media only screen and (min-width: 1366px) {
        margin-top: 52px;
    }
`

const ROW = styled.div`
    border: 1px solid inherit;
    display: flex;
    margin: 0 auto;
    padding: 50px 0;
    width: 100%;
    max-width: 1200px;
    justify-content: left;
    align-content: left;
`
const HEROBOX = styled.div`
    border: 1px solid inherit;
    margin: calc(0.5rem + 15vh) calc(0.5rem + 5vw) 0;
    max-width: 700px;
`
const HEROTEXT = styled.h1`
    border: 1px solid inherit;
    font-size: 48px;
    text-transform: uppercase;
    color: white;

    @media only screen and (max-width: 745px) {
        font-size: 2.5rem;
    }
    @media only screen and (max-width: 654px) {
        font-size: 2rem;
    }
    @media only screen and (max-width: 480px) {
        font-size: 1.8rem;
    }
    @media only screen and (max-width: 328px) {
        font-size: 1.7rem;
    }
`
const HEROPARAGRAPH = styled.p`
    font-size: 1.2rem;
    border: 1px solid inherit;
    padding: 30px 0;
    color: white;
    text-align: justify;
    width: 90%;
`
const LINK = styled(Link)`
    text-decoration: none;
`
const BUTTON = styled.button`
    border: 1px solid darkcyan;
    padding: 20px 30px;
    background: darkcyan;
    color: white;
    font-size: 18px;
    cursor: pointer;
    &:hover {
        background: white;
        color: darkcyan;
    }
`

export default HeroSection
