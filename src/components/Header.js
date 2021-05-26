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
                    <h2>Mirco Cardinale</h2>
                    <p>Developer, NLP, ML, Mobile</p>
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