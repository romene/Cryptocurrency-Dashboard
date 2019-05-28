import React from 'react'
import WelcomeMessage from './WelcomeMessage'
import ConfirmButton from './confirmButton'
import Page from '../Shared/Page'
import CoinGrid from './CoinGrid'
import Search from '../Settings/Search'
export default function(){
    return(
        <Page name="settings">
            <WelcomeMessage />
            <CoinGrid topSection />
            <ConfirmButton />
            <Search />
            <CoinGrid />
        </Page>
    )
}