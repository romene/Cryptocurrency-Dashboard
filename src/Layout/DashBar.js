import React from 'react'
import styled, {css} from 'styled-components'
import {AppContext} from '../AppProvider'

const Logo = styled.div`
font-size: 1.5em;
`

const AppBar = styled.div`
display: grid;
grid-template-columns: 180px auto  100px 100px;
height: 64px;
background-color: #fff;
box-sizing: border-box;
padding: 1em;
color: black;
box-shadow: 5px 2px 5px black;
margin-bottom: 1em;
`

const ControlButtonElem = styled.div`
cursor: pointer;
${props => props.active && css`
color: blue;
text-shadow: 0 0 60px red;
`}
`

function ControlButton({name, active}){
    return(
        <AppContext.Consumer>
            {(page, setPage) => (
            <ControlButtonElem
             active={page === name}
             onClick={() => setPage(name)}>
            {name}
        </ControlButtonElem>
            )}
        </AppContext.Consumer>
        
    )
}



export default () => {
  return (
    <AppBar>
        <Logo>CryptoDash</Logo>
        <div>
            
        </div>
          <ControlButton active name="Dashboard" />
          <ControlButton name="Settings" />
        
    </AppBar>
  )
}


