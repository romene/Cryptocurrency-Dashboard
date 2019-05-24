import React from 'react'
import { AppContext } from '../AppProvider';

export default function({name, children}) {
    return <AppContext.Consumer>
            {({page}) => {
               if(page !== name) {
                return null
               } else {
                   return(
                       <div>
                           {children}
                       </div>
                   )
               }
            }}
        </AppContext.Consumer>
    
}
