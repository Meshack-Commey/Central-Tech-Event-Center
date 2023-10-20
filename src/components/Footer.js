import styled from "styled-components"


const Footer = () => {

    const Year = new Date().getFullYear();

    return (
        <FOOTER>
            <FOOTEROW>
                <TEXT>
                    &copy; { Year } Central Tech Event Center. All Rights Reserved. Website by <LINK href="https://meshack-commey.onrender.com" target="_blank">Meshack Commey</LINK>
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
    max-width: 1200px;
    justify-content: ;
    align-content: ;
`
const TEXT = styled.p`
    color: white;
    font-size: 1rem;
    text-align: left;
`
const LINK = styled.a`
    color: white;
    cursor: pointer;
`

export default Footer
