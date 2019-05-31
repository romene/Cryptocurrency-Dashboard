import React from 'react'
import { AppContext } from '../AppProvider';

const textCenter = {
  textAlign: 'center'
};

const WelcomeMessage = () => {
    return (
        <AppContext.Consumer>
            {(firstVisit) =>  {
                
                return(
                    firstVisit ? <div style={textCenter}> Favorites CryptoCurrencies. {' '}</div> : null
                )
            }
            }
        </AppContext.Consumer>
    )
}

export default WelcomeMessage
