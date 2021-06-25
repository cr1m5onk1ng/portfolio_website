import React from 'react'
import './WidgetItem.css'


function WidgetItem({widgetItems}) {

    const widgetItem = (content, subtitle, icon) => {
        return (
            <div className="widgetItem">
                <div className="widgetItem__header">
                    <img className="widgetItem__img" src={icon} alt=""/>    
                    <h4 className="widgetItem__content">{content}</h4>
                </div>
                <p className="widgetItem__subtitle">{subtitle}</p>   
            </div>
        );
    };

    return (
        <div classname="widgets__article"> 
            <div className="widgets__itemsContainer">
                {widgetItems.map( item => (
                    widgetItem(
                        item.title,
                        item.subtitle,
                        item.icon
                    )
                ))}
            </div>
        </div>
        
    )
}

export default WidgetItem
