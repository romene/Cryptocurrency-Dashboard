import React, { Component } from 'react'
import _ from 'lodash';

const cc = require('cryptocompare');

//call variable for React.Context
export const AppContext = React.createContext()
const MAX_FAVORITES = 10;
const LocalStorage_Key = 'Cryptos';


 class AppProvider extends Component {
     constructor(props){
         super(props)
         this.state = {
            page: 'dashboard',
            favorites: [],
            ...this.savedSettings(),
            setPage: this.setPage,
            addCoin: this.addCoin,
            removeCoin: this.removeCoin,
            isInFavorites: this.isInFavorites,
            confirmFavorites: this.confirmFavorites,
            setFilteredCoins: this.setFilteredCoins

         }
     }
     
     //fetch data from API when component mount
     componentDidMount = () => {
         this.fetchCoins()
         this.fetchPrices()
     }

     //function async await to get data coin list
     fetchCoins = async () => {
         let coinList = (await cc.coinList()).Data
         this.setState({coinList})
     }

     fetchPrices = async () => {
         if (this.state.firstVisit) return;
         let prices = await this.prices();
         this.setState({prices})
     }
     
     prices = async () => {
         let returnData = [];
         for(let i = 0; i < this.state.favorites.length; i++) {
             try {
                 let priceData = await cc.priceFull(this.state.favorites[i], 'USD')
                 returnData.push(priceData)
                } catch (e) {
                    console.log('Fectch price error: ', e)
                }
            }
            return returnData
     }


     //function to include coins on favorites top section
     addCoin = key => {
         let favorites = [...this.state.favorites]
         if(favorites.length < MAX_FAVORITES){
             favorites.push(key)
             this.setState({favorites})
            }
        }
        
        // function to remove coins from favorites top section
        removeCoin = key => {
        let favorites = [...this.state.favorites]
        this.setState({favorites: _.pull(favorites, key)}) 
     }

     isInFavorites = key => _.includes(this.state.favorites, key);

     

     //method to confirm favorites
     confirmFavorites = () => {
         this.setState({
             firstVisit: false,
             page: 'dashboard'
         }, () => {
             this.fetchPrices();
         } );
         localStorage.setItem(LocalStorage_Key, JSON.stringify({
             favorites: this.state.favorites,
         }))
     }

     //select settings when land the page
     savedSettings(){
         let cryptoDashData = JSON.parse(localStorage.getItem(LocalStorage_Key));
         if (!cryptoDashData){
             return {page: 'settings', firstVisit: true}
         }
         let {favorites} = cryptoDashData;
         return {favorites}
     }

     setFilteredCoins = (filteredCoins) => this.setState({filteredCoins})

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
