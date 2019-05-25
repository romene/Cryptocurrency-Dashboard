import React from 'react'
import styled from 'styled-components'
import { AppContext } from '../AppProvider'
import { fontSize1, greenBoxShadow, color, bgbutton} from '../Shared/Style'

const ConfirmButtonStyled = styled.button`
margin: 20px;
padding: 5px;
color: ${color};
${fontSize1}
${bgbutton}

cursor: pointer;
    &:hover {
        ${greenBoxShadow}
    }

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
