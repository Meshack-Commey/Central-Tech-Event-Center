import styled from "styled-components"


const TextBox = () => {
    return (
        <CONTAINER>
            <ROW>
                <TEXTBOX>
                    <TEXT>
                        The Central Tech Event Center was built with the purpose of uniting 
                        the Tech Community and providing a Tech Space for memorable experiences. 
                        Enjoy these pictures of our facility and some of our customer’s events.
                    </TEXT>
                </TEXTBOX>
            </ROW>
        </CONTAINER>
    )
}

// styled component
const CONTAINER = styled.div`
    border: 1px solid inherit;
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
const TEXT = styled.p`
    font-size: 18px;
    color: gray;
`

export default TextBox
