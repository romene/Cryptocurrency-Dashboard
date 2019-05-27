import React from 'react'
import {AppContext} from '../AppProvider'
import styled from 'styled-components'
import CoinTile from '../Settings/CoinTile'


function getCoins(coinList, topSection, favorites) {
    return topSection ? favorites : Object.keys(coinList).slice(0, topSection ? 10 : 100);    
}

export default function({topSection}) {
return<AppContext.Consumer>
    {({ coinList, favorites }) => {
        return(
            <>
                <h1>{topSection ? "Favorite" : "Total: " + getCoins(coinList).length} coins. </h1>
             <CoinListStyled>
                    {getCoins(coinList, topSection, favorites).map(coinKey => 
                    <CoinTile topSection={topSection} key={coinKey} coinKey={coinKey}
                     />
                    )}
                </CoinListStyled>   
            </>
        )
    }}
</AppContext.Consumer>    
}

const CoinListStyled = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
grid-gap: 1em;
padding: 3rem;
margin: 0 1em;
`
