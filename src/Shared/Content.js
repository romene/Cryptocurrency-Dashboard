import React from 'react'
import { AppContext } from '../AppProvider';
import ReactLoading from 'react-loading';
import styled from 'styled-components'

export default function(props) {
    
    return <AppContext.Consumer>
        {({coinList, prices, firstVisit}) => {
            if(!coinList){
            return <Loading>
                <ReactLoading type={"bars"} height={50} width={50} />
                </Loading>    
            }
            if(!firstVisit && !prices){    
                return <div> Loadind prices </div>
            }
            return <div> {props.children} </div>
        }}
    </AppContext.Consumer>
}


const Loading = styled.div`
position: absolute;
top: 50%;
left: 50%;
display: flex;
justify-content: center;
align-items: center;

`