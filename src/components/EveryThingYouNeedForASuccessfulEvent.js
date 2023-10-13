import styled from "styled-components";
import { Key } from '@mui/icons-material'
// importing states
import Highlight from '../assets/sucessful event.jpg'

const EveryThingYouNeedForASuccessfulEvent = () => {
  return (
    <CONTAINER>
        <ROW>
            <FLEXBOX>
                <BOX>
                    <IMAGEBOX>
                        <IMG src={Highlight} alt="event center" />
                    </IMAGEBOX>
                </BOX>
                <TEXTBOX>
                    <TEXTWRAP>
                        <H1>EVERYTHING YOU NEED FOR A SUCCESSFUL EVENT</H1>
                        <PARAGRAPH>
                            At Code Coast Event Center, you'll find the perfect event
                            space for all of your special occasions. We strive to
                            provide the community with the necessary environment and
                            amenities to create unique memories.
                        </PARAGRAPH>
                    </TEXTWRAP>
                    <LIST>
                        <LISTITEM> <BULLET_ICON /> <SPAN>Versatile</SPAN> </LISTITEM>
                        <LISTITEM> <BULLET_ICON /> <SPAN>Secure Facilities</SPAN> </LISTITEM>
                        <LISTITEM> <BULLET_ICON /> <SPAN>Specialized Equipment</SPAN> </LISTITEM>
                    </LIST>
                </TEXTBOX>
            </FLEXBOX>
        </ROW>
    </CONTAINER>
  );
};

export default EveryThingYouNeedForASuccessfulEvent;



// styled components
const CONTAINER = styled.div`
  border: 1px solid inherit;
  margin-bottom: 5rem;
`
const ROW = styled.div`
  border: 1px solid inherit;
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
  justify-content: center;
  align-content: center;
`
const FLEXBOX = styled.div`
    border: 1px solid inherit;
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: 1024px) {
        flex-direction: column-reverse;
    }
`
const BOX = styled.div`
    border: 1px solid inherit;
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    max-width: ;
    justify-content: center;
    align-content: center;
    text-align: center;

    @media (max-width: 1024px) {
        margin: 0 auto;
    }
`
const IMAGEBOX = styled.figure`
    border: 1px solid inherit;
    display: flex;
    width: 400px;
    max-width: 400px;
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
    justify-content: center;
    align-content: center;  
    
    @media (max-width: 1024px) {
        padding: 20px;
    }
`
const TEXTWRAP = styled.div`
    border: 1px solid inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;  
    margin: 0;

    ${'' /* @media (max-width: 900px) {
        padding: ;
    } */}
`
const PARAGRAPH = styled.p`
    font-size: 1rem;
    border: 1px solid inherit;
    color: gray;

    @media (max-width: 480px) {
        text-align: justify;
    }
    @media (max-width: 384px) {
        padding: 0 50px;
    }
`
const H1 = styled.span`
    border: 1px solid inherit;
    font-size: 38px;
    color: darkcyan;

    @media only screen and (max-width: 1024px) {
        text-align: center;
    }
    @media only screen and (max-width: 745px) {
        font-size: 2.5rem;
    }
    @media only screen and (max-width: 654px) {
        font-size: 2rem;
    }
    @media only screen and (max-width: 480px) {
        font-size: 1.8rem;
    }
    @media only screen and (max-width: 384px) {
        font-size: 1.5rem;
        padding: 0 20px;
    }
        ${'' /* @media only screen and (max-width: 328px) {
            font-size: 1.5rem;
        } */}
`
const LIST = styled.ul`
    border: 1px solid inherit;
    list-style-type: none;
    display: in-line;
    padding: 0;
    margin: 0;

    @media only screen and (max-width: 384px) {
        font-size: 1.1rem;
        padding: 0 50px;
    }
`
const LISTITEM = styled.li`
    border: 1px solid inherit;
    padding: 5px 0;
    color: gray;
    text-decoration: none;
    margin: 0;
    display: flex;
    gap: .5rem;
`
const BULLET_ICON = styled(Key)`
    border: 1px solid inherit;
`
const SPAN = styled.span`
    border: 1px solid inherit;
`
