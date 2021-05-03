import React from 'react'
import './ArticleRow.css'
import { ExternalLink } from 'react-external-link';

function ArticleRow({
    description,
    title,
    image, 
    href,
}) {
    return (
        <div className="articleRow">
            <div className="articleRow__image">
                <img src={image} alt="some image"/>
            </div>
            <div className="articleRow__text">
                <ExternalLink href={href}>
                    <h3>{title}</h3>
                </ExternalLink>
                <p className="articleRow__description">{description}</p>
            </div>
        </div>
    )
}

export default ArticleRow
