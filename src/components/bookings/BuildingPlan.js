import styled from "styled-components"

import Building from '../../assets/Event-Center-Layout-Diagram.png'

const BuildingPlan = () => {
    return (
        <CONTAINER>
            <ROW>
                <IMAGE_BOX>
                    <IMAGE src={Building} alt="building plan" />
                </IMAGE_BOX>
                <TEXT_BOX>
                    <p> Attendees: Venue Maximum 360 </p>
                    <p> Deposite is required | Price </p>
                    <ul>
                        <li>small</li>
                        <li>medium</li>
                        <li>large</li>
                    </ul>
                </TEXT_BOX>
            </ROW>
        </CONTAINER>
    )
}

// styled component
const CONTAINER = styled.div`
    border: 1px solid red;
`
const ROW = styled.div`
    border: 1px solid brown;
    display: flex;
    margin: 0 auto;
    padding: 40px 0;
    max-width: 1200px;
    justify-content: center;
    align-content: center;
`
const IMAGE_BOX = styled.div`
    border: 1px solid gray;
    width: 300px;
`
const IMAGE = styled.img`
    width: 100%;
`
const TEXT_BOX = styled.div`
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1100px;
    justify-content: center;
    align-content: center;
    text-align: center;
    color: black;
`

export default BuildingPlan
