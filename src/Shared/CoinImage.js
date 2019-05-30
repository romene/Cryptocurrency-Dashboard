import React from 'react'
import styled, { css } from 'styled-components'

export default function({coin, spotlight}){
    return <CoinImage
    alt={coin.CoinSymbol}
    spotlight={spotlight}
    src={`http://cryptocompare.com/${coin.ImageUrl}`}
     />
}


// add CoinImage as styled Component
const CoinImage = styled.img`
height: 50px
${props => props.spotlight && css`
height: 200px;
margin: auto;
display: block;
`}
`