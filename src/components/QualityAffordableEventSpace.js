import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ROW, BOX } from './styledComponents/Container'
import { H6, P } from './styledComponents/Typography.styles'

import AffordableSpace from '../assets/affordablespace.jpg'

const OpenAndAvailableForAllEventOccasion = () => {
    const eventSpace = [
        { "space": "Small Room", "seats": 165 },
        { "space": "Large Room", "seats": 195 },
        { "space": "Entire Venue", "seats": 360 },
    ]

    return (
        <CONTAINER>
            <ROW>
                <BOX>
                    <H1> QUALITY, AFFORDABLE EVENT SPACE IN TECH </H1>
                    <MARGIN_10>
                        <PARAGRAPH>
                            We value every person that comes through our doors and strive to keep our rental space affordable and
                            accessible to everyone in the community, such as residents from Kakraba, Nyanyano, Ofarnkor, and Kasoa
                        </PARAGRAPH>
                    </MARGIN_10>
                    <FIELDSET>
                        {
                            eventSpace.map((value) => {
                                return(
                                    <FIELDCIRCLE>
                                        <FIELD>
                                            <FIELDTEXT> { value.space } </FIELDTEXT>
                                            <FIELDTEXT> Seats { value.seats } </FIELDTEXT>
                                        </FIELD>
                                    </FIELDCIRCLE>
                                )
                            })
                        }
                    </FIELDSET>
                    <LINK to={"pricing"}>
                        <HEADTEXT6>SEE OUR PRICING</HEADTEXT6>
                    </LINK>
                </BOX>
            </ROW>
        </CONTAINER>
    )
}


// STYLED COMPONENTS
const CONTAINER = styled.div`
    border: 1px solid inherit;
    padding: 20px 0;
    background: url(${AffordableSpace});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    position: relative;
    z-index: 0;
    &::before {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        content: "";
        z-index: -1;
        background: rgba(0, 139, 139, 0.5);
    }
`
const LINK = styled(Link)`
    text-decoration: underline;
    font-weight: bolder;
    color: white;
`
const H1 = styled.h1`
    font-size: 38px;
    color: snow;
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
const HEADTEXT6 = styled(H6)`
    color: white;
`
const PARAGRAPH = styled(P)`
    font-size: 1.2rem;
    color: white;
    border: 1px solid inherit;
    max-width: 690px;
    margin: 0 auto;
    padding: 1rem;

    @media (max-width: 480px) {
        text-align: justify;
        padding: 2rem;
    }
`
const MARGIN_10 = styled.span`
    margin: 10px 0;
`
const FIELDSET = styled.span`
    border: 1px solid inherit;
    margin: 50px auto;
    max-width: 800px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    gap: 100px;

    @media (max-width: 1024px) {
        gap: 3rem;
    }
    @media (max-width: 480px) {
        gap: 2rem;
    }
`
const FIELDCIRCLE = styled.span`
    border: 1px solid snow;
    border-radius: 112px;
    margin: 0 auto;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`
const FIELD = styled(FIELDCIRCLE)`
    border: 1px solid snow;
    height: 150px;
    width: 150px;
    border-radius: 112px;
    background: white;
    color: darkcyan;
    font-weight: bolder;

    @media (max-width: 599px) {
        height: 120px;
        width: 120px;
    }
`
const FIELDTEXT = styled(P)`
    border: 1px solid inherit;
    font-weight: bolder;

    @media (max-width: 599px) {
        font-size: .9rem;
    }
`


export default OpenAndAvailableForAllEventOccasion
