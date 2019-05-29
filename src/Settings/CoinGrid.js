import React from 'react'
import {AppContext} from '../AppProvider'
import styled from 'styled-components'
import CoinTile from '../Settings/CoinTile'



function getLowerSectionCoins(coinList , filteredCoins) {
    return (filteredCoins && Object.keys(filteredCoins)) ||
     Object.keys(coinList).slice(0, 100) 
}

function getCoins(coinList, topSection, favorites, filterCoins) {
    return topSection ? favorites : getLowerSectionCoins(coinList, filterCoins)   
}

export default function({topSection}) {
return(<AppContext.Consumer>
    {({ coinList, favorites, filteredCoins }) => {
        return(
            <>
                
             <CoinListStyled>
                    {getCoins(coinList, topSection, favorites, filteredCoins).map(coinKey => 
                    <CoinTile topSection={topSection} key={coinKey} coinKey={coinKey}
                     />
                    )}
                </CoinListStyled>   
            </>
        )
    }}
</AppContext.Consumer>    )
}

const CoinListStyled = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
grid-gap: 1em;
padding: 3rem;
margin: 0 1em;
`
