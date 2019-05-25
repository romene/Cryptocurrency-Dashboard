import React from 'react'
import {AppContext} from '../AppProvider'


const CoinGrid = () => {
    return (
        <AppContext.Consumer>
            {(coinList) => {
                return(
                    <h1>Estou tentando coinList</h1>
                )
            }}
            <h1>Ola from CoinGrid</h1>
        </AppContext.Consumer>
    )
}

export default CoinGrid
