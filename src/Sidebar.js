import React from 'react'
import './Sidebar.css'
import { Avatar } from '@material-ui/core'
import ComputerIcon from '@material-ui/icons/Computer';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import TranslateIcon from '@material-ui/icons/Translate';
import Image from './static/avatar.png';


function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?size=626&ext=jpg&ga=GA1.2.1588707983.1617494400" alt=""/>
                <Avatar src={Image} className="sidebar__avatar"/>
                <h2>Mirco Cardinale</h2>
                <h4>mirco.cardinale.91@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>CS Graduate</p>
                    <ComputerIcon />
                </div>
                <div className="sidebar__stat">
                    <p>Social Sciences Graduate</p>
                    <LibraryBooksIcon />
                </div>
                <div className="sidebar__stat">
                    <p>Language passionate</p>
                    <TranslateIcon />
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Github</p>
                {recentItem('NLP at the edge')}
                {recentItem('NaLa android app')}
                {recentItem('Limapp flutter app')}
                {recentItem('Semantic search')}
                {recentItem('Topic modeling')}
                {recentItem('Word sense disambiguation')}
            </div>
        </div>
    );
}

export default Sidebar
