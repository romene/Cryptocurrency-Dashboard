import React from 'react'
import styled, {css} from 'styled-components'
import {AppContext} from '../AppProvider'

const Logo = styled.div`
font-size: 1.5em;

@media(max-width: 700px) {
  ${props => props.small && css`
  display: none
  ` }
}

`

const AppBar = styled.div`
display: grid;
grid-template-columns: auto auto  100px 100px;
height: 64px;
background-color: #000;
box-sizing: border-box;
padding: 1em;
color: #fff;
margin-bottom: 1em;

@media(max-width: 700px) {
  ${props => props.smalldevice && css`
  grid-template-columns: auto 100px 100px;
  
  ` }
}

`

const ControlButtonElem = styled.div`
cursor: pointer;
text-align: center;
color: #393e46;
${props => props.active && css`
color: #fff;
border-bottom: 1px solid white;
text-shadow: 0 0 60px #342434;
`}
${props => props.hidden && css `
display: none;
`}
`

function ControlButton({name}){
    return(
        <AppContext.Consumer>
            {({firstVisit, page, setPage}) => (
            <ControlButtonElem
             active={page === name}
             onClick={() => setPage(name)}
             hidden={firstVisit && name === 'dashboard'}
             >
            {name}
        </ControlButtonElem>
            )}
        </AppContext.Consumer>
        
    )
}



export default () => {
  return (
    <AppBar smalldevice>
        <Logo small>CryptoCurrency Dashboard</Logo>
        <div/>
          <ControlButton active name="dashboard" />
          <ControlButton name="settings" />
        
    </AppBar>
  )
}


