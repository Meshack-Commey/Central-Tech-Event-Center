import styled from "styled-components"

// importing states
import Highlight from '../assets/sucessful event.jpg'


const TopEventVenueSection = () => {
    return (
        <CONTAINER>

            <ROW>
                <BOX>
                    <H3>TOP EVENT VENUE IN KAKRABA, KASOA</H3> <br />
                    <H1>THE IDEAL LOCATION FOR ALL YOUR SPECIAL EVENTS</H1> <br />
                    <PARAGRAPH>
                            Founded by Five-time All-Star and retired Major League Baseball player, Torii Hunter, and His wife Katrina Hunter, the Torii and 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rem dolorum officia ipsam unde ducimus distinctio, commodi, 
                            voluptate tempore quos quod nobis eaque labore assumenda ratione doloremque delectus facere? Quibusdam!
                    </PARAGRAPH>
                </BOX>
            </ROW>

            <ROW> 
            <PADDING_50>
                <FLEXBOX>
                        <BOX>
                            <IMAGEBOX>
                                <IMG src={Highlight} alt="event center" />
                            </IMAGEBOX>
                        </BOX>
                        <TEXTBOX>
                            <TEXTWRAP>
                                <H1>EVERYTHING YOU NEED FOR A SUCCESSFUL EVENT</H1>
                                <MARGIN_10>
                                    <PARAGRAPH> At Code Coast Event Center, you'll find the perfect event space for all of your special occasions. We strive to provide the community with the necessary environment and amenities to create unique memories. </PARAGRAPH>
                                </MARGIN_10>
                            </TEXTWRAP>
                            <LIST>
                                <LISTITEM>Versatile</LISTITEM>
                                <LISTITEM>Secure Facilities</LISTITEM>
                                <LISTITEM>Specialized Equipment</LISTITEM>
                            </LIST>
                        </TEXTBOX>
                </FLEXBOX>
                </PADDING_50>
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
    max-width: 1200px;
    justify-content: center;
    align-content: center;
`
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
const FLEXBOX = styled.div`
    border: 1px solid inerit;
    display: flex;
    flex-direction: row;
    max-width: 1100px;
    margin: 0 auto;
`
const IMAGEBOX = styled.div`
    border: 1px solid inherit;
    display: flex;
    margin: 0 20px;
    max-width: 300px;
    justify-content: center;
    align-content: center;
`
const IMG = styled.img`
    width: 100%;
`
const TEXTBOX = styled.div`
    border: 1px solid inherit;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1200px;
`
const TEXTWRAP = styled(TEXTBOX)`
    max-width: 600px;
    margin: 0 0 0 30px;
    border: 1px solid inherit;
`
const PARAGRAPH = styled.p`
    font-size: 18px;
    margin: 0 auto;
    max-width: 690px;
    border: 1px solid inherit;
    color: gray;
`
const H3 = styled.span`
    font-size: 22px;
    color: gray;
`
const H1 = styled.span`
    font-size: 38px;
    color: darkcyan;
`
const MARGIN_10 = styled.span`
    margin: 10px;
` 
const PADDING_50 = styled.span`
    padding: 50px;
`
const LIST = styled.ul`
    list-style-type: none;
    display: in-line;
    margin: 0 0 0 30px;
`
const LISTITEM = styled.li`
    padding: 5px;
    color: gray;
`



export default TopEventVenueSection
