import React from 'react'
import styled from 'styled-components'
import { backgroundColor2, fontSize2, makeItCenter} from '../Shared/Style'



const Search = () => {
    return (
        <SearchArea>
            <SearchLabel>Find your favorite coins: </SearchLabel>
            <SearchInput></SearchInput>
        </SearchArea>
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

