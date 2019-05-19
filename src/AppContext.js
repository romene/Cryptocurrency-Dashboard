import React from 'react'

const AppContext = React.createContext()

class AppProvider extends React.Component{
    state = {
        name: "Rogerio"
    }
render(){
    return(
        <AppContext.Provider value="I'm Rogerio">
            {this.props.children}
        </AppContext.Provider>
    )
}
}

export default AppProvider