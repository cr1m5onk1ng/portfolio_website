import React from 'react'
import './TopicRow.css'

function TopicRow({image, title, description}) {
    return (
        <div className="topicRow">
            <div className="topicRow__text">
                <h4>{title}</h4>
                {description && <p>{description}</p>}
            </div>
        </div>
    )
}

export default TopicRow
