import React, { Component } from 'react'
const cc = require('cryptocompare')


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
     
     //fetch data from API when component mount
     componentDidMount = () => {
         this.fetchCoins()
     }

     //function async await to get data coin list
     fetchCoins = async () => {
         let coinList = (await cc.coinList()).Data
         this.setState({coinList})
        
         
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
         let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
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
