import { Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import './Resume.css'
import WorkIcon from '@material-ui/icons/Work'
import SchoolIcon from '@material-ui/icons/School';
import {VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import TimelineDot from '@material-ui/lab/TimelineDot';

function Resume() {

    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };

    const experiences = [
        {
            id: 1,
            title: "Computer Science/Informatics",
            date: "November 2016 - December 2020",
            location: "La Sapienza University of Rome",
            description: null,
            icon: "school"
        },
        {
            id: 2,
            title: "Freelance translator / proofreader",
            date: "Summer 2014 - December 2020",
            location: "Rome",
            description: "Part-time translator from English / French / Spanish to Italian for local clients",
            icon: "work"
        },
        {
            id: 3,
            title: "Social worker",
            date: "Spring 2015 - Winter 2016",
            location: "SPRAR",
            description: "Social worker traineeship in the SPRAR system for non-EU immigrants integration",
            icon: "work"
        },
        {
            id: 4,
            title: "Anthropology",
            date: "November 2011 - July 2014",
            description: null,
            location: "La Sapienza University of Rome",
            icon: "school"
        },
        {
            id: 5,
            title: "Social worker",
            date: "Spring 2013 - Winter 2013",
            description: "Social work as a teacher of Italian as a second language in favor of immigrants' children in Rome belonging to rom ethnicity",
            location: "Rome",
            icon: "work"
        }
    ]

    const skills = [
        {
            title: "Spoken Languages",
            elements: [
                "Italian - Mothertongue",
                "English - Advanced",
                "French - Advanced",
                "Spanish - Intermediate-Advanced",
                "Japanese - Beginner"
            ]
        },
        {
            title: "Frameworks/Libraries",
            elements: [
                "PyTorch",
                "Sklearn",
                "Spacy",
                "nltk",
                "Android Jetpack",
                "Flutter",
                "Tensorflow lite"
            ]
        },
        {
            title: "Fields of interest",
            elements: [
                "Machine Learning",
                "NLP",
                "NLP on edge devices",
                "Digital humanities",
                "Data analytics",
                "Mobile developement",
                "Deep Learning for small projects"
            ]
        }
    ]

    return (
        <div className="resumeBody">
            <Grid container className="section">
                <Grid item className="sectionTitle">
                    <span></span>
                    <h6 className="sectionTitle__text">About me</h6>

                </Grid>
                <Grid item  xs={12}>
                    <Typography variant="body2" className="aboutText" variant="h6">
                    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
                    </Typography>

                </Grid>
            </Grid>

            <Grid container className="section">
                <Grid item className="sectionTitle">
                    <span></span>
                    <h6 className="sectionTitle__text">Resume</h6>
                </Grid>

                <Grid item xs={12}>
                           <VerticalTimeline  
                            layout={ "1-column-left" }
                            animate={ false }
                            >
                               {
                                   experiences.map(experience => {
                                       let isWorkIcon = experience.icon == "work";
                                        return (
                                            <VerticalTimelineElement
                                                key={experience.key}
                                                date={experience.date}
                                                dateClassName="date"
                                                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                                                icon={isWorkIcon ? <WorkIcon/> : <SchoolIcon/>}
                                            >
                                                <h3 className="vertical-timeline-element-title">{experience.title}</h3>
                                                <h5 className="vertical-timeline-element-subtitle">{experience.location}</h5>
                                                {experience.description !== null && <p id="description">{experience.description}</p>}
                                            </VerticalTimelineElement>
                                            )
                                        }
                                    )
                               }
                           </VerticalTimeline>
                </Grid>
            </Grid>

            <Grid container className="section">
                <Grid item xs={12}>
                    <Grid container justify="space-evenly" spacing={3}>
                    {
                    skills.map(skill => (
                        <div className="skillsContainer">
                            <Paper className="skill" elevation={2}>
                                <Typography className="skill__title" variant="h6">
                                    {skill.title}
                                </Typography>
                                {skill.elements.map( el => 
                                    (
                                        <Typography className="skill__description" variant="body2">
                                            <TimelineDot className="timelineDot" variant="outlined" />
                                            {el}
                                        </Typography>  
                                    )
                                )}
                            </Paper>
                        </div>
                    ))
                    }
                    </Grid>
                </Grid>
                
                
            </Grid>
        </div>   
    )
}

export default Resume
