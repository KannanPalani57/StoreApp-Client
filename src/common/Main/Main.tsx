import './Main.css'
import React from 'react';
import Cart from '..//Cart/Cart'
import Login from '..//Forms/Login/Login'
import Register from '..//Forms/Register/Register'
import Help from '..//Forms/Help/Help'
import Dashboard from '..//..//components/Dashboard/Dashboard'
import CartView from '..//Cart/CartView'

import { Route} from 'react-router';
import Container from '@material-ui/core/Container';
import ProductListView from '..//..//components/Product-list-View/ProductListView'





function Main() {
    const color1 = "rgb(245 244 244)";
const color2 = "#ffffff";

    return (
        <div>
             <Container fixed style={{ 
                background: `linear-gradient(to bottom,  ${color1} 0%,${color2} 100%)`, height: '100%',marginTop:'7vh',color:'white' ,paddingTop:'5vh'}}>
             
            <Route exact path='/' component={Dashboard} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/help' component={Help} />
            <Route path='/cartview' component={CartView} />
            <Route path='/productlistview' component={ProductListView} />

             {/* haven't used history.push , instead used href
               */}
             
            </Container>
         
         
        </div>
    )
}

export default Main
