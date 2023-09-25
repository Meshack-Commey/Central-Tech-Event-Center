import styled from "styled-components"
import HeroPic from '../assets/herobg.jpg'

const HeroSection = () => {
    return (
        <>
        <NAVBAR_AREA_PADDING></NAVBAR_AREA_PADDING>
        <CONTAINER>
            <ROW>
                <HEROBOX>
                    <HEROTEXT> the perfect place to create lasting memories </HEROTEXT>
                    <HEROPARAGRAPH>At Central Tech Event Center, we understand that memorable occasions deserve a special place to be celebrated. Our venue is the perfect location for any event.</HEROPARAGRAPH>
                    <BUTTON>Book Now</BUTTON>
                </HEROBOX>
            </ROW>
        </CONTAINER>
        </>
    )
}



// styled components
const NAVBAR_AREA_PADDING = styled.div`
    padding: 52px;
`
const CONTAINER = styled.div`
    border: 1px solid inherit;
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
`

const ROW = styled.div`
    border: 1px solid inherit;
    display: flex;
    margin: 0 auto;
    padding: 20px 0;
    max-width: 1200px;
    justify-content: left;
    align-content: left;
`
const HEROBOX = styled.div`
    border: 1px solid inherit;
    margin: calc(0.5rem + 15vh) 0;
    max-width: 700px;
`
const HEROTEXT = styled.h1`
    border: 1px solid inherit;
    font-size: 48px;
    text-transform: uppercase;
    color: white;
`
const HEROPARAGRAPH = styled.p`
    font-size: 18px;
    border: 1px solid inherit;
    padding: 30px 0;
    color: white;
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
