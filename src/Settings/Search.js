import React from 'react'
import styled from 'styled-components'
import { backgroundColor2, fontSize2} from '../Shared/Style'
import { AppContext } from '../AppProvider';
import _ from 'lodash'
import fuzzy from 'fuzzy'

const handleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
    // Get all the coin symbols 
    let coinSymbols = Object.keys(coinList)
    // Get all the coin names, map, symbol to name
    let coinNames = coinSymbols.map(sym => coinList[sym].CoinName)
    let allStringToSearch = [...coinSymbols, ...coinNames];
    let fuzzyResults = fuzzy
    .filter(inputValue, allStringToSearch, {})
    .map(result => result.string);

    let filteredCoins = _.pickBy(coinList, (result, symKey) => {
        let coinName = result.CoinName
        return(_.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName));
    })
    console.log(filteredCoins)
    setFilteredCoins(filteredCoins)
}, 500)

function filterCoins(e, setFilteredCoins, coinList) {
    let inputValue = e.target.value
    if(!inputValue){
        setFilteredCoins(null)
        return
    }
    handleFilter(inputValue, coinList, setFilteredCoins)
}

const Search = () => {
    return (
        <AppContext.Consumer>
            {({setFilteredCoins, coinList}) => 
                <SearchArea>
                    <SearchLabel>Find your favorite coins: </SearchLabel>
                    <SearchInput onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)} ></SearchInput>
                </SearchArea>}
        </AppContext.Consumer>
    )
}



export default Search

const SearchArea = styled.div`

display: flex;
justify-content: flex-start;
align-items: center;
flex-wrap: wrap;
`

const SearchLabel = styled.h2`

`

const SearchInput = styled.input`
height: 3em;
width: 400px;
${backgroundColor2}
${fontSize2}
margin-left: 1em;
color: white;
padding: 0;
`

