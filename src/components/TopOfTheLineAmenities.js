import styled from "styled-components"
import { Accessible, ConnectWithoutContact, Commute, LocalBar, Language, LaptopWindows,  } from '@mui/icons-material'


const TopOfTheLineAmenities = () => {

    // const amenities = [
    //     { "text": "", "icon": ""},
    //     { "text": "", "icon": ""},
    //     { "text": "", "icon": ""},
    //     { "text": "", "icon": ""},
    //     { "text": "", "icon": ""},
    //     { "text": "", "icon": ""},
    // ]

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
                                        <Commute />
                                    </ICONBOX>
                                    <P>ON SITE PARKING</P>
                                </FLEXITEM>
                                <FLEXITEM>
                                    <ICONBOX>
                                        <Language />
                                    </ICONBOX>
                                    <P>WIRELESS INTERNET</P>
                                </FLEXITEM>
                                <FLEXITEM>
                                    <ICONBOX>
                                        {/* <Highlight /> */}
                                        <Accessible />
                                    </ICONBOX>
                                    <P>WHEELCHAIR ACCESSIBLE</P>
                                </FLEXITEM>
                                <FLEXITEM>
                                    <ICONBOX>
                                        <LaptopWindows />
                                    </ICONBOX>
                                    <P>PROJECTOR EQUIPMENT</P>
                                </FLEXITEM>
                                <FLEXITEM>
                                    <ICONBOX>
                                        <ConnectWithoutContact />
                                    </ICONBOX>
                                    <P>SURROUND SOUND</P>
                                </FLEXITEM>
                                <FLEXITEM>
                                    <ICONBOX>
                                        <LocalBar />
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


export default TopOfTheLineAmenities

// styled components
const CONTAINER = styled.div`
    border: 1px solid inheirt;
    background: inherit;
`

const ROW = styled.div`
    border: 1px solid inherit;
    display: flex;
    margin: 0 auto;
    padding: 10px 0;
    max-width: 1200px;
    justify-content: center;
    align-content: center;
`

const BOX = styled.div`
    border: 1px solid inherit;
    display: flex;
    flex-direction: column;
    margin: 30px auto;
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
    color: darkcyan;
`
const H1 = styled.h1`
    font-size: 38px;
    color: darkcyan;
`
const P = styled.p`
    font-size: 18px;
    color: darkcyan;
`
