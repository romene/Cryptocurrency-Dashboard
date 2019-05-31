import React from 'react'
import { AppContext } from '../AppProvider';
import ReactLoading from 'react-loading';
import styled from 'styled-components'
import Loading from './Loading'

export default function(props) {
    
    return <AppContext.Consumer>
        {({coinList, prices, firstVisit}) => {
            if(!coinList){
            return <Loading>
                <ReactLoading type={"spinningBubbles"} height={50} width={50} />
                </Loading>    
            }
            if(!firstVisit && !prices){    
                return <Loading>
                    <ReactLoading type={"spinningBubbles"} height={50} width={50} />
                </Loading>  
            }
            return <div> {props.children} </div>
        }}
    </AppContext.Consumer>
}

