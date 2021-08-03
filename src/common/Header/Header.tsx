import React, { Component } from 'react'
import './Header.css';
import Cart from '..//Cart/Cart'
import Search from '..//Search/Search'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';


export class Header extends Component {
    render() {
        return (
            <div>
                <div className="navbar-top">

                    <div className="menu-icon-smallscreens">
                    <IconButton className='iconButton' aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    </div>
                    <div className="site-name">
                        <span><a href="/">THE STORE</a></span>
                    </div>

                    <div className="search-box">
                        <Search />
                    </div>

                    <div className="button-grp">
                        <ButtonGroup  variant="text" color="primary" aria-label="text primary button group">
                        <Button href="/">Home</Button>
                        <Button href="/login">Login</Button>
                        <Button href="/register">Register</Button>
                        <Button href="/help">Help</Button>
                        </ButtonGroup>
                    </div>
                    <div className="search-icon-smallscreens">
                    <IconButton type="submit" className='iconButton' aria-label="search">
                        <SearchIcon />
                  </IconButton>

                    </div>

                    <div className="cart-icon">
                        <Cart />
                    </div>

                </div>
            </div>
        )
    }
}

export default Header
