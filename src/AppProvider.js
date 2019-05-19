import React from 'react'

//create React Context
export const AppContext = React.createContext()


export class AppProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 'rogerio'
        }
    }
    setPage = page => this.setState({page})

    render(){
        return(
            // pass state as props (value) on the context created and wrap it for children
            <AppContext.Provider value={this.state}> 
                {this.props.children}
            </AppContext.Provider>
        )
    }
}