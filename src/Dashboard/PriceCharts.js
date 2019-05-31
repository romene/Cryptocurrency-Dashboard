import React from 'react'
import HighchartsConfig from './HighchartsConfig'
import {Tile} from '../Shared/Tile'
import { AppContext } from '../AppProvider';
import Loading from '../Shared/Loading'
import ReactLoading from 'react-loading';
import ReactHighcharts from 'react-highcharts'
import HighchartsTheme from './HighchartsTheme'
import {ErrorData} from '../Shared/NoData'
ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

const PriceCharts = () => {
    return (
        <AppContext.Consumer>
            {({currentFavorite, historical}) => {
                if(!currentFavorite){
                    return <ErrorData>Oh no! You deleted all coins!!! Go to settings and choose your favorites coins.  </ErrorData>
                } else {
                    return <Tile>
                        {historical ?
                            <ReactHighcharts
                                config={HighchartsConfig(historical)}
                            /> : <Loading>
                                <ReactLoading type={"spokes"} height={50} width={50} />
                            </Loading>
                        }
                    </Tile>
                }
            }
            }
        </AppContext.Consumer>
    )
}

export default PriceCharts
