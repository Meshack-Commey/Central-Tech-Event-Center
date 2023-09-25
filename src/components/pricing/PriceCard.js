import styled from 'styled-components'

// imported static states
import SmallRoom from '../../assets/small-room.jpg'
import LargeRoom from '../../assets/large-room.jpg'
import EntireVenue from '../../assets/entire-venue.jpg'


const PriceCard = () => {
    return (
        <CONTAINER>
            <ROW>
                <div>
                    <FLEXBOX>
                        <CARD>
                            <CARDIMAGE>
                                <IMG src={SmallRoom} alt='small room' />
                            </CARDIMAGE>
                            <CARDCONTENT>
                                <H5>SMALL ROOM (SEATS 185) </H5>
                                <TEXT>Weekday Pricing starting at GHS2000 per hour</TEXT>
                                <TEXT>Weekend pricing starting at GHS5000 per hour</TEXT>
                                <TEXT>4 hour minimum</TEXT>
                            </CARDCONTENT>
                            <CARDFOOTER>
                                <BUTTON>Book</BUTTON>
                            </CARDFOOTER>
                        </CARD>
                        <CARD>
                            <CARDIMAGE>
                                <IMG src={LargeRoom} alt='small room' />
                            </CARDIMAGE>
                            <CARDCONTENT>
                                <H5> LARGE ROOM (SEATS 360) </H5>
                                <TEXT>Weekday Pricing starting at GHS2000 per hour</TEXT>
                                <TEXT>Weekend pricing starting at GHS5000 per hour</TEXT>
                                <TEXT>4 hour minimum</TEXT>
                            </CARDCONTENT>
                            <CARDFOOTER>
                                <BUTTON>Book</BUTTON>
                            </CARDFOOTER>
                        </CARD>
                        <CARD>
                            <CARDIMAGE>
                                <IMG src={EntireVenue} alt='entire venue' />
                            </CARDIMAGE>
                            <CARDCONTENT>
                                <H5> ENTIRE VENUE (SEATS 660) </H5>
                                <TEXT>Weekday Pricing starting at GHS2000 per hour</TEXT>
                                <TEXT>Weekend pricing starting at GHS5000 per hour</TEXT>
                                <TEXT>4 hour minimum</TEXT>
                            </CARDCONTENT>
                            <CARDFOOTER>
                                <BUTTON>Book</BUTTON>
                            </CARDFOOTER>
                        </CARD>
                    </FLEXBOX>

                    <TEXTBOX>
                        <TEXT>Customized Options Are Available</TEXT>
                        <TEXT>Additional Fees May Include, But Are Not Limited To:</TEXT>
                        <TEXT>Cleaning Fee - GHS200 (Single Room), GHS900 (Entire Venue)</TEXT>
                    </TEXTBOX>
                </div>
            </ROW>
        </CONTAINER>
    )
}


// STYLED COMPONENTS
const CONTAINER = styled.div`
    border: 1px solid inherit;
    padding: 30px;
`
const ROW = styled.div`
    border: 1px solid inherit;
    display: flex;
    margin: 0 auto;
    max-width: 1200px;
    justify-content: center;
    align-content: center;
    padding: 30px;
`
const FLEXBOX = styled.div`
    border: 1px solid inherit;
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    justify-content: center;
    align-content: center;
    text-align: center;
    gap: 30px;
`
const CARD = styled.div`
    border: 1px solid inherit;
`
const CARDIMAGE = styled.div`
    border: 1px solid inherit;
    width: 350px;
    margin: 0 auto;
`
const IMG = styled.img`
    width: 100%;
`
const CARDCONTENT = styled.div`
    border: 1px solid inherit;
    background: white;
    padding: 20px 0;
    line-height: 40px;
`
const CARDFOOTER = styled.div`
    border: 1px solid inherit;
`
const TEXTBOX = styled.div`
    border: 1px solid inherit;
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    justify-content: center;
    align-content: center;
    text-align: center;
    padding: 50px;
    line-height: 40px;
`
const H5 = styled.h5`
    font-size: 20px;
    color: darkcyan;
`
const TEXT = styled.p`
    font-size: 16px;
    color: gray;
`
const BUTTON = styled.button`
    border: 1px solid darkcyan;
    background: white;
    color: darkcyan;
    margin: 20px;
    padding: 20px 100px;
    font-size: 18px;
    font-weight: bolder;
    &:hover{
        background: darkcyan;
        color: white;
    }
`



export default PriceCard
