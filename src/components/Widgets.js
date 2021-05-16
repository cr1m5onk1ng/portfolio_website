import React from 'react'
import './Widgets.css'
import BuildIcon from '@material-ui/icons/Build'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import WidgetItem from './WidgetItem'

function Widgets() {

    const ITEMS = [
        {
            title: "Python",
            subtitle: "ML, Web, Scripting",
            icon: "https://cdn.iconscout.com/icon/free/png-256/python-20-1175115.png"
        },
        {
            title: "Kotlin",
            subtitle: "Android dev",
            icon: "https://cdn.iconscout.com/icon/free/png-256/kotlin-2038873-1720086.png"
        },
        {
            title: "Java",
            subtitle: "University projects, Android",
            icon: "https://cdn.iconscout.com/icon/free/png-256/java-23-225999.png"
        },
        {
            title: "Dart",
            subtitle: "Flutter dev",
            icon: "data:image/png;base64,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"
        },
        {
            title: "SQL",
            subtitle: "Android, personal projects, university projects",
            icon: "https://cdn.iconscout.com/icon/free/png-512/sql-29-1127899.png"
        },

        
    ];

    const ITEMS2 = [
        {
            title: "Javascript",
            subtitle: "React, Web Scripting",
            icon: "https://iconape.com/wp-content/files/vr/353405/svg/javascript-js-seeklogo.com.svg"
        },
    ]

    const ITEMS3 = [
        {
            title: "Rust",
            subtitle: "ML, WASM, Microservices",
            icon: "data:image/png;base64,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"
        },
        {
            title: "Go",
            subtitle: "Backend, WASM",
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png"
        },
    ]

    const itemTitle = (heading) => {
        return (
            <div className="widgets__itemTitle">
                <FiberManualRecordIcon />
                <h4>{heading}</h4>
            </div>
        );
    }

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Skills</h2>
                <BuildIcon />
            </div>
            {itemTitle("Languages I'm quite familiar with")}
            <WidgetItem widgetItems={ITEMS} />
            <hr/>
            {itemTitle("Languages I'm somewhat familiar with")}
            <WidgetItem widgetItems={ITEMS2} />
            <hr/>
            {itemTitle("Languages I'm learning")}
            <WidgetItem widgetItems={ITEMS3} />
        </div>
    );
}

export default Widgets
