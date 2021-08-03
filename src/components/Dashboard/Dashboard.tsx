import React from 'react'
import './Dashboard.css'

import Nav from 'react-bootstrap/Nav'
import Carousel from 'react-bootstrap/Carousel'
import { List } from '@material-ui/icons'
import {getProductListBy} from '..//..//redux/actions/getData'
import { useSelector, useDispatch } from "react-redux";



function Dashboard(){
     
     const dispatch = useDispatch();
         return (
        <div >
              <section className="section-carousel">
         <Carousel  >
            
         <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </section>
           
           
         <section className="category-nav ">
        
         <Nav defaultActiveKey="/home" className="justify-content-center category-nav">
  
             <div className="category">
             <span>Women Clothing</span>
        <Nav.Link href="/productlistview"><img onClick={()=>{console.log('its clicked !')}} src="https://images.pexels.com/photos/6567737/pexels-photo-6567737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Women clothing" /></Nav.Link>
             </div>

             <div className="category">
             <span>Women jewelery</span>
        <Nav.Link href="/productlistview" ><img onClick={()=>{dispatch(getProductListBy('jewelery'))}} src="https://images.pexels.com/photos/3641056/pexels-photo-3641056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" /></Nav.Link> 
          </div>
          <div className="category">
          <span>Men's clothing</span>
        <Nav.Link  href="/productlistview"><img src="https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" /></Nav.Link>
               </div>
          <div className="category"> 
          <span>Electronics</span>
        <Nav.Link  href="/productlistview"><img src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" /> </Nav.Link>
      
          </div>
        </Nav>
        </section>
        </div>
    )
    }
    
   


export default Dashboard





