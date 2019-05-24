import React from 'react'
import { AppContext } from '../AppProvider';


const WelcomeMessage = () => {
    return (
        <AppContext.Consumer>
            {({firstVisit}) =>
                firstVisit ? <h1>Welcome to Crypto Dashboard!</h1> : null
             }
            
        </AppContext.Consumer>
    )
}

export default WelcomeMessage
