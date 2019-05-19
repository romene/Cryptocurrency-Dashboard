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
`

const ControlButtonElem = styled.div`
cursor: pointer;
${props => props.active && css`
color: blue;
`}
`

function ControlButton({name, active}){
    return(
        <AppContext.Consumer>
            {/* callback to get props from context  */}
            {({page}) => 
                <ControlButtonElem active={page === name}>
                    {name}
                </ControlButtonElem>
            }
        </AppContext.Consumer>
    )
}



export default () => {
  return (
    <AppBar>
        <Logo>CryptoDash</Logo>
        <div>
            <AppContext>
                {(context) => (
                    <p>I'm inside consumer</p>
                )}
            </AppContext>
        </div>
          <ControlButton name="Dashboard" />
          <ControlButton name="Settings" />
        
    </AppBar>
  )
}


