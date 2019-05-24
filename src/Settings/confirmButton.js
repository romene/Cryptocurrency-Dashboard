import React from 'react'
import styled from 'styled-components'
import { AppContext } from '../AppProvider'


const ConfirmButtonStyled = styled.button`
margin: 20px;
color: green;
padding: 10px;
cursor: pointer;
`
export const CenterDiv = styled.div`
display: grid;
justify-content: center;
`

const ConfirmButton = () => {
    return (
        <AppContext.Consumer>
            {({ confirmFavorites }) => 
            <CenterDiv>
                <ConfirmButtonStyled
                onClick={confirmFavorites}> 
                Confirm Favorites
            </ConfirmButtonStyled>
            </CenterDiv>
             }
        </AppContext.Consumer>
    )
}

export default ConfirmButton
