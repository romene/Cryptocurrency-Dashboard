import React from 'react'
import styled from 'styled-components'
import Page from '../Shared/Page'
import PriceGrid from './PriceGrid'
import CoinSpotlight from './CoinSpotlight';
import PriceCharts from './PriceCharts'

export default function() {
  return <Page name="dashboard">
    <PriceGrid />
    <ChartGrid>
    <CoinSpotlight />
    <PriceCharts />
    </ChartGrid>
  </Page>
}


// Styled components 

const ChartGrid = styled.div`
display: grid;
margin-top: 20px;
grid-gap: 15px;
grid-template-columns: 1fr 3fr;


@media (max-width: 991px){
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));

}
`