import React from 'react'
import styled from 'styled-components'
import { AppContext } from '../AppProvider';
import PriceTile from './PriceTile'



const PriceGrid = styled.div`
max-width: 80%;
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-gap: 20px;
margin-top: 5em;

@media (max-width: 991px){

grid-template-columns: repeat(auto-fill, 1fr);
}


`

export default function () {
    return(
        <AppContext.Consumer>
            {({prices}) => (
                <PriceGrid >
                    {prices.map((price, index) => (

                        <PriceTile key={price.FROMSYMBOL} index={index} price={price} />
                        
                    ))}
                </PriceGrid>
            )}
        </AppContext.Consumer>
    )

}

