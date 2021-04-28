import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import HeaderOption from './HeaderOption';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'

function Header(){
    const { pathname } = useLocation();
    return (
        <div className="header">
            <div className="header__left">
                <img src="" alt=""/>
                <div className="header__search">
                    {/* 
                    <SearchIcon />
                    <input type="text"/>
                    */}
                    <h2>Hi, I'm some guy you should probably hire</h2>
                </div>
            </div>
            <div className="header__right">
                <Link to="/">
                    <HeaderOption title="Home" page={pathname} Icon={HomeIcon}/>
                </Link>
                
                <Link to="/resume">
                    <HeaderOption title="Resume" page={pathname} Icon={ImportContactsIcon} />
                </Link>
                
            </div>

        </div>
    );
}

export default Header