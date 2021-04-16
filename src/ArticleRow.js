import React from 'react'
import './ArticleRow.css'

function ArticleRow({
    description,
    title,
    image, 
}) {
    return (
        <div className="articleRow">
            <div className="articleRow__image">
                <img src={image} alt="some image"/>
            </div>
            
            <div className="articleRow__text">
                <h3>{title}</h3>
                <p className="articleRow__description">{description}</p>
            </div>
        </div>
    )
}

export default ArticleRow
