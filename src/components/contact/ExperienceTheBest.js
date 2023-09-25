import styled from 'styled-components'
import CONTAINER, { ROW }  from '../styledComponents/Container'

// imported static state
import GoogleMap from '../../assets/GoogleMap.png'

const ExperienceTheBest = () => {
    return (
        <CONTAINER>
            <ROW>
                <FLEXBOX>
                    <IMAGEBOX>
                        <IMG src={GoogleMap} alt="image" />
                    </IMAGEBOX>
                    <BOX>
                        <TEXTBOX>
                            <H3> EXPERIENCE THE BEST OF FRISCO, TEXAS WHEN YOU CELEBRATE WITH YOUR COMMUNITY AT CENTRAL TECH EVENT CENTER. </H3> <br /><br />
                            <TEXT> <b>Areas Covered:</b> Frisco, Little Elm, Prosper, Mckinney </TEXT>
                            <TEXT> <b>Hours:</b> Mondays - Saturday 8am to 11pm; Sunday 2pm - 12am</TEXT> <br />
                            <TEXT> <b>Email:</b> eventcenter@centraltechub.com </TEXT>
                            <TEXT> <b>Call:</b> +233 030-343-454-2346 </TEXT> 
                            <TEXT> <b>Address:</b> 25631 Nyanyano Rd, Kasoa, Kakraba, 72 </TEXT>
                        </TEXTBOX>
                    </BOX>
                </FLEXBOX>
            </ROW>
        </CONTAINER>
    )
}


// styled components

const FLEXBOX = styled.div`
    border: 1px solid red;
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    gap: 50px;
`

const BOX = styled.div`
    border: 1px solid green;
    display: flex;
    margin: 0 auto;
    max-width: 1200px;
    justify-content: center;
    align-content: center;
`
const H3 = styled.h3`
    font-size: 28px;
    color: darkcyan;
`
const P = styled.p`
    font-size: 18px;
    color: gray;
`
const TEXTBOX = styled.div`
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    max-width: 800px;
    justify-content: left;
    align-content: left;
    text-align: left;
`
const TEXT = styled(P)`
    max-width: 600px;
    border: 1px solid inherit;
`
const IMAGEBOX = styled.div`
    border: 1px solid yellow;
    width: 600px;
`
const IMG = styled.img`
    width: 100%;
`



export default ExperienceTheBest
