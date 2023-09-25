import { Link } from 'react-router-dom'
import styled from 'styled-components'

// importing image state
import { Diversity1, Diversity2, Diversity3, Celebration, School, PersonAdd, LibraryMusic, JoinFull  } from '@mui/icons-material'

const OurSpaceYourVision = () => {
    return (
        <CONTAINER>
            <ROW>
                <FLEXBOX>
                    <BOX>
                        <TEXTBOX>
                            <H1> OUR SPACE, <br /> YOUR VISION. </H1> <br />
                            <TEXT>
                                Our space is versatile and can be easily transformed into the space that fits your vision.
                                If you're unsure about whether or not we can accommodate your event, please get in touch to
                                discuss the details.        
                            </TEXT>
                            <LINK to={"bookings"}> BOOK YOUR NEXT EVENT </LINK>
                        </TEXTBOX>
                    </BOX>
                    <GRID>
                        <GRIDITEM>
                            <ICONBOX>
                                <LibraryMusic />
                            </ICONBOX> 
                            <P>Concerts</P>
                        </GRIDITEM>
                        <GRIDITEM> 
                            <ICONBOX>
                                <Diversity1 />
                            </ICONBOX> 
                            <P> Community Gatherings </P>
                        </GRIDITEM>
                        <GRIDITEM> 
                            <ICONBOX>
                                <Diversity2 />
                            </ICONBOX> 
                            <P> Comferences & Workshops </P>
                        </GRIDITEM>
                        <GRIDITEM> 
                            <ICONBOX>
                                <School />
                            </ICONBOX> 
                            <P> Graduations </P>
                        </GRIDITEM>
                        <GRIDITEM> 
                            <ICONBOX>
                                <Diversity3 />
                            </ICONBOX> 
                            <P> Family Reunion </P>
                        </GRIDITEM>
                        <GRIDITEM> 
                            <ICONBOX>
                                <Celebration />
                            </ICONBOX> 
                            <P> Birthdays </P>
                        </GRIDITEM>
                        <GRIDITEM> 
                            <ICONBOX>
                                <PersonAdd />
                            </ICONBOX> 
                            <P> Fundraisers </P>
                        </GRIDITEM>
                        <GRIDITEM> 
                            <ICONBOX>
                                <JoinFull />
                            </ICONBOX> 
                            <P> Weddings </P>
                        </GRIDITEM>
                    </GRID>
                </FLEXBOX>
            </ROW>
        </CONTAINER>
    )
}


// styled components
const CONTAINER = styled.div`
    border: 1px solid inherit;
    background: inherit; 
    padding: 50px;
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
    gap: 100px;
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
    margin: 0 5rem 0 0;
    max-width: 400px;
    justify-content: left;
    align-content: left;
    text-align: left;
`
const H1 = styled.span`
    font-size: 48px;
    color: darkcyan;
`
const LINK = styled(Link)`
    font-size: 22px;
    color: darkcyan;
    text-decoration: underline;
    font-weight: bolder;
`
const P = styled.p`
    font-size: 18px;
    border: 1px solid inherit;
    color: gray;
`
const TEXT = styled.p`
    padding: 10px 0;
    width: 280px;
    max-width: 600px;
    border: 1px solid inherit;
    font-size: 18px;
    color: gray;
`
const GRID = styled.div`
    border: 1px solid inherit;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3.5rem;
    margin: 0 auto;
`
const GRIDITEM = styled.div`
    border: 1px solid inherit;
    display: flex;
    border-radius: 5px;
    gap: .5rem;
`
const ICONBOX = styled.div`
    width: 40px;
    padding: 18px 0 0 0;
    border: 1px solid inherit;
`




export default OurSpaceYourVision