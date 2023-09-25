import CONTAINER, { ROW } from "./styledComponents/Container"
import styled from "styled-components"

// importing image state
import Highlight from '../assets/highlight.jpg'
//import { WheelChair } from '@mui/icons-material'

const TopOfTheLineAmenities = () => {
    return (
        <CONTAINER>
            <ROW>
                <BOX>
                    <H1>TOP-OF-THE-LINE-AMENITIES</H1>
                    <BOX>
                        <FLEX>
                            <FLEXITEMS>
                                <FLEXITEM>
                                    <ICONBOX>
                                        <ICON src={Highlight} alt="icon" />
                                    </ICONBOX>
                                    <P>ON SITE PARKING</P>
                                </FLEXITEM>
                                <FLEXITEM>
                                    <ICONBOX>
                                        <ICON src={Highlight} alt="icon" />
                                    </ICONBOX>
                                    <P>WIRELESS INTERNET</P>
                                </FLEXITEM>
                                <FLEXITEM>
                                    <ICONBOX>
                                        <ICON src={Highlight} alt="icon" />
                                    </ICONBOX>
                                    <P>WHEELCHAIR ACCESSIBLE</P>
                                </FLEXITEM>
                                <FLEXITEM>
                                    <ICONBOX>
                                        <ICON src={Highlight} alt="icon" />
                                    </ICONBOX>
                                    <P>PROJECTOR EQUIPMENT</P>
                                </FLEXITEM>
                                <FLEXITEM>
                                    <ICONBOX>
                                        <ICON src={Highlight} alt="icon" />
                                    </ICONBOX>
                                    <P>SURROUND SOUND</P>
                                </FLEXITEM>
                                <FLEXITEM>
                                    <ICONBOX>
                                        <ICON src={Highlight} alt="icon" />
                                    </ICONBOX>
                                    <P>SPACIOUS KITCHENETTE</P>
                                </FLEXITEM>
                            </FLEXITEMS>
                        </FLEX>
                    </BOX>
                </BOX>
            </ROW>
        </CONTAINER>
    )
}

// styled components

const BOX = styled.div`
    border: 1px solid inherit;
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    max-width: 1200px;
    justify-content: center;
    align-content: center;
    text-align: center;
`

const FLEX = styled.div`
    display: flex;
    margin: 0 auto;
    max-width: 1200px;
    justify-content: center;
    align-content: center;
`
const FLEXITEMS = styled(FLEX)`
    border: 1px solid inherit;
    flex-wrap: wrap;
    gap: 20px;
`
const FLEXITEM = styled(FLEXITEMS)` 
    border: 1px solid darkcyan;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    max-width: 100px;
    background: white;
    border-radius: 5px;
    gap: 0px;
`
const ICONBOX = styled.div`
    width: 40px;
    margin: 20px auto;
`
const ICON = styled.img`
    width: 100%;
`
const H1 = styled.h1`
    font-size: 38px;
    color: darkcyan;
`
const P = styled.p`
    font-size: 18px;
    color: darkcyan;
`


export default TopOfTheLineAmenities