import React from 'react'
import HighchartsConfig from './HighchartsConfig'
import {Tile} from '../Shared/Tile'
import { AppContext } from '../AppProvider';
import ReactHighcharts from 'react-highcharts'

const PriceCharts = () => {
    return (
        <AppContext.Consumer>
            {({}) => 
            <Tile>
                <ReactHighcharts
                    config={HighchartsConfig()}
                 />
            </Tile>
            }
        </AppContext.Consumer>
    )
}

export default PriceCharts