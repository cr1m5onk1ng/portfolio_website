import React from 'react'
import './Sidebar2.css'
import HomeIcon from '@material-ui/icons/Home'

function Sidebar2() {
    return (
        <div className="sidebar">
            <SidebarRow title="Home" Icon={HomeIcon} />
            <SidebarRow title="Home" Icon={HomeIcon} />
            <SidebarRow title="Home" Icon={HomeIcon} />
            <hr/>
            <SidebarRow title="Home" Icon={HomeIcon} />
            <SidebarRow title="Home" Icon={HomeIcon} />
            <SidebarRow title="Home" Icon={HomeIcon} />
            <SidebarRow title="Home" Icon={HomeIcon} />
            <hr/>
        </div>
    )
}

export default Sidebar2
