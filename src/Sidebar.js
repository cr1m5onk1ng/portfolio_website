import React from 'react'
import './Sidebar.css'
import { Avatar } from '@material-ui/core'
import ComputerIcon from '@material-ui/icons/Computer';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import TranslateIcon from '@material-ui/icons/Translate';
import Image from './static/avatar.png';
import { ExternalLink } from 'react-external-link';


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
                    <p>Computer Science Graduate</p>
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
                <ExternalLink href="https://github.com/cr1m5onk1ng?tab=repositories">
                    <p>Github</p>
                </ExternalLink>
                <ExternalLink href="https://github.com/cr1m5onk1ng/text_similarity">
                    {recentItem('Text similarity')}
                </ExternalLink>
                <ExternalLink href="https://github.com/cr1m5onk1ng/nala_android_app">
                    {recentItem('NaLa android app')}
                </ExternalLink>
                <ExternalLink href="https://github.com/cr1m5onk1ng/limapp_flutter">
                    {recentItem('Limapp flutter app')}
                </ExternalLink>
                <ExternalLink href="https://github.com/cr1m5onk1ng/semantic-search-api">
                    {recentItem('Semantic search')}
                </ExternalLink>
                <ExternalLink href="https://github.com/cr1m5onk1ng/japanese_news_scraper">
                    {recentItem('Data collection')}
                </ExternalLink>    
                <ExternalLink href="https://github.com/cr1m5onk1ng/text_similarity/tree/master/src/experiments">
                    {recentItem('Word sense disambiguation')}
                </ExternalLink>                
            </div>
        </div>
    );
}

export default Sidebar
