import { Link } from 'react-router-dom'
import styled from 'styled-components'
import CONTAINER, { ROW }  from './styledComponents/Container'


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
                                25631 Nyanyano Rd, <br />
                                Kasoa, Kakraba, 72
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
                    </BOX>
                </FLEXBOX>
            </ROW>
        </CONTAINER>
    )
}


// styled components
const FLEXBOX = styled.div`
    border: 1px solid inherit;
    display: flex;
    flex-direction: row;
    max-width: 1100px;
    margin: 0 auto;
    padding: 50px;
    gap: 180px;
`

const BOX = styled.div`
    border: 1px solid inherit;
    display: flex;
    margin: 0 auto;
    max-width: 1200px;
    justify-content: center;
    align-content: center;
    
`

const TEXTBOX = styled.div`
    border: 1px solid inherit;
    display: flex;
    flex-direction: column;
    width: 320px;
    justify-content: left;
    align-content: left;
    text-align: left;
`
const P = styled.p`
    font-size: 18px;
    color: gray;
`
const TEXT = styled(P)`
    padding: 1px 0;
    border: 1px solid inherit;

`
const H1 = styled.h1`
    font-size: 48px;
    color: darkcyan;
    margin: 0;
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
`
const LINK = styled(Link)`
    font-weight: bolder;
`
const MAPBOX = styled.div`
    border: 1px solid inherit;
    width: 600px;
    margin: 0;
`
const IMG = styled.img`
    width: 100%;
`

export default OurSpaceYourVision
