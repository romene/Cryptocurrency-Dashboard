import React from 'react'
import {AppContext} from '../AppProvider'
import styled from 'styled-components'

export default function() {
return<AppContext.Consumer>
    {({ coinList }) => {
        return(
            <CoinListStyled>
                {Object.keys(coinList).map(coinKey => <div key={coinKey}>{coinKey}</div>
                )}
            </CoinListStyled>
        )
    }}
</AppContext.Consumer>    
}

const CoinListStyled = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
`
