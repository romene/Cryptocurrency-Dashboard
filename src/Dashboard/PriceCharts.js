import React from 'react'
import HighchartsConfig from './HighchartsConfig'
import {Tile} from '../Shared/Tile'
import { AppContext } from '../AppProvider';
import Loading from '../Shared/Loading'
import ReactLoading from 'react-loading';
import ReactHighcharts from 'react-highcharts'
import HighchartsTheme from './HighchartsTheme'
ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

const PriceCharts = () => {
    return (
        <AppContext.Consumer>
            {({historical}) => 
            <Tile>
                {historical ? 
                <ReactHighcharts
                    config={HighchartsConfig(historical)}
                        /> : <Loading>
                            <ReactLoading type={"spokes"} height={50} width={50} />
                        </Loading>
                }
            </Tile>
            }
        </AppContext.Consumer>
    )
}

export default PriceCharts
