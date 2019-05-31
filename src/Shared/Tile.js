
import styled from 'styled-components'
import { subtleBoxShadow, lightBlueBackground, greenBoxShadow, redBoxShadow} from '../Shared/Style'


export const Tile = styled.div`
${subtleBoxShadow}
${lightBlueBackground}
padding: 1em;
`

export const SelectableTile = styled(Tile)`
    &:hover {
    cursor: pointer;
    ${greenBoxShadow}
}   
`

export const DeletableTile = styled(SelectableTile)`
    &:hover{
    cursor: pointer;
    ${redBoxShadow}
    
}   
`

export const DisabledTile = styled(SelectableTile)`
    pointer-events: none;
    opacity: .4;
`




