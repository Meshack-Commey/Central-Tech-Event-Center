import { Link } from 'react-router-dom'
import styled from 'styled-components'



// importing static state
import GoogleMap from '../assets/GoogleMap.png'

const OurSpaceYourVision = () => {
    return (
        <CONTAINER>
            <ROW>
                <FLEXBOX>
                    <BOX>
                        <TEXTBOX>
                            <H1> CONTACT US</H1> <br />
                            <TEXT>
                                centraltech@eventscenter.com  <br />
                                +233 030-012-234-143  
                            </TEXT>
                            <TEXT>
                                Off KFC Rd, Kakraba <br />
                                Nyanyano, Kasoa
                            </TEXT>
                            <LINK to={"contact"}>
                                <BUTTON> Submit Inquiry </BUTTON>
                            </LINK>
                        </TEXTBOX>
                    </BOX>
                    <BOX>
                        <MAPBOX>
                            <IMG src={GoogleMap} alt="Central Tech Event Center" />
                        </MAPBOX>
                        <LINK to={"contact"}>
                            <BUTTON1> Submit Inquiry </BUTTON1>
                        </LINK>
                    </BOX>
                </FLEXBOX>
            </ROW>
        </CONTAINER>
    )
}


// styled components
const CONTAINER = styled.div`
    border: 1px solid inherit;
    background: inherit; 
    padding: 50px 0;
`
const ROW = styled.div`
    border: 1px solid inherit;
    display: flex;
    margin: 0 auto;
    padding: 30px 0;
    max-width: 1200px;
    justify-content: center;
    align-content: center;
`
const FLEXBOX = styled.div`
    border: 1px solid inherit;
    display: flex;
    flex-direction: row;
    max-width: 1100px;
    margin: 0 auto;
    padding: 50px;
    gap: 180px;

    @media (max-width: 1024px) {
        flex-direction: column;
        gap: 1rem;
    }
`

const BOX = styled.div`
    border: 1px solid inherit;
    display: flex;
    margin: 0 auto;
    max-width: 1200px;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 1024px) {
            flex-direction: column;

    }
`

const TEXTBOX = styled.div`
    border: 1px solid inherit;
    display: flex;
    flex-direction: column;
    width: 320px;
    justify-content: left;
    align-items: left;
    

    @media (max-width: 1024px) {
        justify-content: center;
        align-items: center;
    }
`
const P = styled.p`
    font-size: 1.2rem;
    color: gray;
`
const TEXT = styled(P)`
    padding: 1px 0;
    border: 1px solid inherit;
    
    @media (max-width: 480px) {
        padding: 0;
        margin: 0;
    }
`
const H1 = styled.h1`
    font-size: 38px;
    color: darkcyan;
    padding: 1rem;

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
        font-size: 1.5rem;
    }
`
const BUTTON = styled.button`
    border: 1px solid darkcyan;
    padding: 20px;
    margin: 20px 0;
    max-width: 200px;
    background: darkcyan;
    color: white;
    cursor: pointer;
    font-size: 18px;
    &:hover {
        background: white;
        color: black;
    }

    @media (min-width: 1025px) {
        display: block;
    }
    @media (max-width: 1024px) {
        display: none;
    }
`
const BUTTON1 = styled(BUTTON)`
    @media (min-width: 1025px) {
        display: none;
    }
    @media (max-width: 1024px) {
        display: block;
    }
`
const LINK = styled(Link)`
    font-weight: bolder;
    text-decoration: none;
`
const MAPBOX = styled.div`
    border: 1px solid inherit;
    width: 500px;
    margin: 0;

    @media (max-width: 1024px) {
        width: 600px;
    }
    @media (max-width: 699px) {
        width: 400px;
    }
    @media (max-width: 480px) {
        width: 300px;
    }
    @media (max-width: 319px) {
        width: 200px;
    }
`
const IMG = styled.img`
    width: 100%;
`

export default OurSpaceYourVision
