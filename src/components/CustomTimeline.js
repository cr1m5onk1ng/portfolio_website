import React from 'react'
import './CustomTimeline.css'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Typography } from '@material-ui/core';

function CustomTimeline({title, Icon, children}) {
    return (
        <Timeline className="timeline">
            <TimelineItem className="timeline__firstItem">
                <TimelineSeparator>
                <TimelineDot className="timelineDot__header" >
                    <Icon />
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6" className="timeline__header">{title}</Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <CustomTimelineSeparator />
                <TimelineContent>Code</TimelineContent>
            </TimelineItem>
            {children}
        </Timeline>
    );
}


export const CustomTimelineSeparator = () => {
    return (
        <TimelineSeparator className="separator__padding">
            <TimelineDot variant="outlined" className="timelineDot"/>
            <TimelineConnector />
        </TimelineSeparator>
    );
}



export default CustomTimeline
