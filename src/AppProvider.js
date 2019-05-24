import React, { Component } from 'react'



//call variable for React.Context
export const AppContext = React.createContext()


 class AppProvider extends Component {
     constructor(props){
         super(props)
         this.state = {
            page: 'dashboard',
            ...this.savedSettings(),
            setPage: this.setPage,
            confirmFavorites: this.confirmFavorites

         }
     }

     //method to confirm favorites
     confirmFavorites = () => {
         this.setState({
             firstVisit: false,
             page: 'dashboard'
         })
         localStorage.setItem('cryptoDash', JSON.stringify({
             test: 'hello'
         }))
     }

     //select settings when land the page
     savedSettings(){
         let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDah'));
         if (!cryptoDashData){
             return{page: 'settings', firstVisit: true}
         }
     }

     setPage = page => this.setState({page})

    render() {
        return (
              <AppContext.Provider value={this.state}> 
                {this.props.children}
            </AppContext.Provider>  
           
        )
    }


}

export default AppProvider
