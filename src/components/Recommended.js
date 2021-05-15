import React from 'react'
import './Recommended.css'
import VideoCard from './VideoCard'

function Recommended() {
    return (
        <div className="recommendedVideos">
            <h2>Articles</h2>
            <div className="recommendedVideos__videos">
                <VideoCard 
                    title="Become a web developer"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage=""
                    channel="Sonny Sangha"
                    image="https://seo-trench.com/wp-content/uploads/2019/11/12-Websites-You-Should-Check-Out-to-Learn-Web-Development-Fast.png"
                />
                <VideoCard 
                    title="Become a web developer"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage=""
                    channel="Sonny Sangha"
                    image="https://seo-trench.com/wp-content/uploads/2019/11/12-Websites-You-Should-Check-Out-to-Learn-Web-Development-Fast.png"
                />
                <VideoCard 
                    title="Become a web developer"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage=""
                    channel="Sonny Sangha"
                    image="https://seo-trench.com/wp-content/uploads/2019/11/12-Websites-You-Should-Check-Out-to-Learn-Web-Development-Fast.png"
                />
                <VideoCard 
                    title="Become a web developer"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage=""
                    channel="Sonny Sangha"
                    image="https://seo-trench.com/wp-content/uploads/2019/11/12-Websites-You-Should-Check-Out-to-Learn-Web-Development-Fast.png"
                />
            </div>
        </div>
    )
}

export default Recommended
