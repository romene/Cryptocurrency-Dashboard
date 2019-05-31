import React from 'react'
import styled from 'styled-components' 
import {Tile} from '../Shared/Tile'
import { AppContext } from '../AppProvider';
import CoinImage from '../Shared/CoinImage'

const CoinSpotlight = () => {
    return (
        <AppContext.Consumer>
        {({currentFavorite, coinList}) => {
            if (currentFavorite) {
                return <Tile><SpotlightName>{coinList[currentFavorite].CoinName} </SpotlightName>
                    <CoinImage spotlight coin={coinList[currentFavorite]} /></Tile> 
            } else {
                return <div> </div>
            }
        }
        }
        </AppContext.Consumer>
    )
}

export default CoinSpotlight


export const SpotlightName = styled.h2`
text-align: center;
`