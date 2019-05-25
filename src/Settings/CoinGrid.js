import React from 'react'
import styled , {css}  from "styled-components";
import { AppContext } from '../AppProvider';

const CoinGrid = () => {
    return (
        <AppContext.Consumer>
            {({coinList}) => <CoinGridstyled>
                {Object.keys(coinList).length}
                </CoinGridstyled> }
        </AppContext.Consumer>
    )
}

export default CoinGrid


export const CoinGridstyled = styled.div`
display: grid;
`