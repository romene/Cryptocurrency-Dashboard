import React from 'react'
import {AppContext} from '../AppProvider'
import styled from 'styled-components'
import { Tile} from '../Shared/Tile'

export default function() {
return<AppContext.Consumer>
    {({ coinList }) => {
        return(
            <>
                <h1>Total: {Object.keys(coinList).length} Coins.</h1>
             <CoinListStyled>
                    {Object.keys(coinList).map(coinKey => <Tile>{coinKey}</Tile>
                    )}
                </CoinListStyled>   
            </>
        )
    }}
</AppContext.Consumer>    
}

const CoinListStyled = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-gap: 1em;
`
