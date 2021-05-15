import { Avatar } from '@material-ui/core'
import React from 'react'
import './HeaderOption.css';


function HeaderOption({Icon, title, page, avatar}) {
    const pageName = page === "/" ? "Home" : page.replace("/", "");
    return (
        <div className="headerOption" id={pageName.toLowerCase() === title.toLowerCase() ? "selected" : ""}>
            {Icon && <Icon className={"headerOption__icon" }  />}
            {avatar && (<Avatar className="headerOption__icon" src={avatar} />)}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption
