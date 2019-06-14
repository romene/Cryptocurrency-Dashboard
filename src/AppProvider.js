import React, { Component } from 'react'
import _ from 'lodash';
import moment from 'moment'
const cc = require('cryptocompare');

//call variable for React.Context
export const AppContext = React.createContext()
export const MAX_FAVORITES = 10;
const TIME_UNITS = 10;
const LocalStorage_Key = 'Cryptos';


 class AppProvider extends Component {
     constructor(props){
         super(props)
         this.state = {
            page: 'dashboard',
             favorites: ['BTC', 'ETC', 'ZEC', 'XRP', 'DAC', 'DASH', 'ETH', 'FTC', 'USDT', 'BCH'],
            ...this.savedSettings(),
            setPage: this.setPage,
            addCoin: this.addCoin,
            removeCoin: this.removeCoin,
            isInFavorites: this.isInFavorites,
            confirmFavorites: this.confirmFavorites,
            setCurrentFavorite: this.setCurrentFavorite,
            setFilteredCoins: this.setFilteredCoins

         }
     }
     
     //fetch data from API when component mount
     componentDidMount = () => {
         this.fetchCoins()
         this.fetchPrices()
         this.fetchHistorical()
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

     fetchHistorical = async () => {
         //if its the fistVisit return nothing
         if (this.state.firstVisit) return;
         let results = await this.historical()
         let historical = [
             {
             name: this.state.currentFavorite,
             data: results.map((value, index) => [
                 moment().subtract({months: TIME_UNITS - index}).valueOf(),
                 value.USD
             ] )
            }
        ]
        
        this.setState({
            historical
        })
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

     // function to get an array of promises 
     historical = () => {
         //set an empty array to get the promises
        let promises = [] 
        // for loop to get 10 results
         for (let units = TIME_UNITS; units > 0; units--){
             promises.push(
                 cc.priceHistorical(
                     this.state.currentFavorite,
                     ['USD'],
                     moment().subtract({months: units}).toDate()


                     )
             )
         }
           return Promise.all(promises)
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

     

     //method to confirm favorites and get current favorite

     confirmFavorites = () => {
         //set current favorite coin
         let currentFavorite = this.state.favorites[0];
        
         this.setState({
             firstVisit: false,
             page: 'dashboard',
             currentFavorite,
             prices: null,
             historical: null
         }, () => {
             this.fetchPrices();
             this.fetchHistorical()
         } );
         localStorage.setItem(LocalStorage_Key, JSON.stringify({
             favorites: this.state.favorites,
             currentFavorite
         }))
     }

     setCurrentFavorite = (sym) => {
         this.setState({
             currentFavorite: sym,
             historical: null,
         }, this.fetchHistorical)
         localStorage.setItem(LocalStorage_Key, JSON.stringify({
            //  merge currentFavorite with the current localstorage
             ...JSON.parse(localStorage.getItem(LocalStorage_Key)),
             currentFavorite: sym
         }))
     }


     //select settings when land the page
     savedSettings(){
         let cryptoDashData = JSON.parse(localStorage.getItem(LocalStorage_Key));
         if (!cryptoDashData){
             return {page: 'settings', firstVisit: true}
         }
         let {favorites, currentFavorite} = cryptoDashData;
         return { favorites, currentFavorite}
     }
     
     setPage = page => this.setState({page})

     setFilteredCoins = (filteredCoins) => this.setState({filteredCoins})


    render() {
        
        return (
              <AppContext.Provider value={this.state}> 
                {this.props.children}
            </AppContext.Provider>  
           
        )
    }


}

export default AppProvider


// {"favorites":["BTC","ETH","ETC","FTC","1337","LTC"],"currentFavorite":"BTC"}