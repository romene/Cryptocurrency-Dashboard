import React from 'react'
import {AppContext} from '../AppProvider'
import styled from 'styled-components'
import CoinTile from '../Settings/CoinTile'


function getCoins(coinList) {
    return Object.keys(coinList).slice(0, 100);    
}

export default function() {
return<AppContext.Consumer>
    {({ coinList }) => {
        return(
            <>
                <h1>Total: {getCoins(coinList).length} Coins.</h1>
             <CoinListStyled>
                    {getCoins(coinList).map(coinKey => <CoinTile key={coinKey} coinKey={coinKey} />
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
padding: 3rem;
`
