import styled from "styled-components"


const Footer = () => {

    const Year = new Date().getFullYear();

    return (
        <FOOTER>
            <FOOTEROW>
                <TEXT>
                    &copy; { Year } Central Tech Event Center. All Rights Reserved.
                </TEXT>
            </FOOTEROW>
        </FOOTER>
    )
}

const FOOTER = styled.nav`
    border: 1px solid inherit;
    background: darkcyan;
    color: white;
    width: 100%;
`
const FOOTEROW = styled.div`
    border: 1px solid inherit;
    display: flex;
    margin: 0 auto;
    max-width: 1000px;
    justify-content: left;
    align-content: left;
`
const TEXT = styled.p`
    color: white;
    font-size: 18px;
`

export default Footer
