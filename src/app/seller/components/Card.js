import React from 'react'
import { CCardTitle, CCard, CCardImage, CCardBody, CButton, CCardText } from '@coreui/react'

const Card = (props) => {

    return(
    <CCard style={{ width: '18rem' }}>
        <CCardImage orientation="top" src={props.url} />
        <CCardBody>
            <CCardTitle>{props.name}</CCardTitle>
            <CCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
            </CCardText>
            <CButton href="#">Go somewhere</CButton>
        </CCardBody>
    </CCard>
    );
}
export default Card