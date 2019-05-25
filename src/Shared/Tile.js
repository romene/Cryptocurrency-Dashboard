import React from 'react'
import styled from 'styled-components'
import { subtleBoxShadow, lightBlueBackground, greenBoxShadow, redBoxShadow, mainbgcolor} from '../Shared/Style'

export const Tile = styled.div`
${subtleBoxShadow}
${lightBlueBackground}
padding: 10px;

&:hover {
    ${mainbgcolor}
    
}
`
