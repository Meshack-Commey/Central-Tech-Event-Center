import styled from 'styled-components'
import Celebrate from '../../assets/celebratewithus.png'

const GalleryHeroSection = () => {
    return (
        <>
        <NAVBAR_AREA_PADDING></NAVBAR_AREA_PADDING>
        <CONTAINER>
            <ROW>
                <BOX>
                    <HEADTEXT> CELEBRATE WITH US </HEADTEXT>
                </BOX>
            </ROW>
        </CONTAINER>
        </>
    )
}


// STYLED COMPONENTS
const NAVBAR_AREA_PADDING = styled.div`
    padding: 52px;
`
const CONTAINER = styled.div`
    border: 1px solid inherit;
    padding: 60px 0;
    background: url(${Celebrate});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: scroll;
    position: relative;
    z-index: 0;
    &::before {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        content: "";
        z-index: -1;
        background: rgba(0, 139, 139, 0.5);
    }
`
const ROW = styled.div`
    border: 1px solid inherit;
    display: flex;
    margin: 50px auto;
    padding: 50px 0;
    max-width: 1200px;
    justify-content: center;
    align-content: center;
`
const BOX = styled.div`
    border: 1px solid inherit;
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    max-width: 1100px;
    justify-content: center;
    align-content: center;
    text-align: center;
    color: white;
`
const HEADTEXT = styled.h1`
    font-size: 58px;
`

export default GalleryHeroSection