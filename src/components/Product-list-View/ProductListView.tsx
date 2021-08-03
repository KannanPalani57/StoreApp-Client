import React, { Component } from 'react'
import { useEffect } from 'react'
import Reducer_showData, { RootState } from '..//..//redux/reducers/index'

import { useSelector, useDispatch } from "react-redux";

function ProductListView() {
    const dispatch = useDispatch();

    // const productList = useSelector((state:RootState) => state.Reducer_showData.data);
    // const productList = useSelector((state:RootState,RootState['data']) => state.Reducer_showData.data); 
    //showproduct is reducer
   
   
    return (
        <div>
              {/* { productList.map((item:any) => {console.log(item)} ) */}
              
            
            
        </div>
    )
}


export default ProductListView
