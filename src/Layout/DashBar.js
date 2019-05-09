import React from 'react'
import styled, {css} from 'styled-components'


const Logo = styled.div`
font-size: 1.5em;
`

const AppBar = styled.div`
display: grid;
grid-template-columns: 180px auto  100px 100px;

height: 64px;
background-color: white;
box-sizing: border-box;
padding: 1em;
color: black;
`

const ControlButtonElem = styled.div`
cursor: pointer;
${props => props.active && css`
color: blue;
`}
`

function ControlButton({name, active}){
    return(
        <ControlButtonElem active={active}>
            {name}
        </ControlButtonElem>
    )
}



export default () => {
  return (
    <AppBar>
        <Logo>CryptoDash</Logo>
        <div/>
          <ControlButton name="Dashboard" />
          <ControlButton name="Settings" />
        
    </AppBar>
  )
}


