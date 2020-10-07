import React from 'react';
import ProjectItem from "./ProjectItem";

function Projects() {
    return (
        <div className="main-body">
            <h1>My Projects</h1>
            <div className="projects-container">
                <ProjectItem
                    name={'Spell Game'}
                    programs={'Pygame, Python'}
                    description={'Built an educational game designed for word memorization. ' +
                    'Quickly type the words and strike down the zombies before you lose.'}
                    link={'https://devpost.com/software/peter-spell-master'}>
                        <img className="item-pic" src={require("../images/spellMaster.jpg")} alt="Spell Master Game" />
                </ProjectItem>
                <ProjectItem
                    name={'Scheduling App'}
                    programs={'Java'}
                    description={'Created the algorithm which determines the times where the users on the calender ' +
                    'are available and helps schedule new meetings.'}
                    link={'https://github.com/bduarte27/software-product-sprint/tree/master/walkthroughs/week-4-tdd/project'}>
                        <img className="item-pic" src={require("../images/calender.jpg")} alt="Calender App" />
                </ProjectItem>
                <ProjectItem
                    name={'Community Post'}
                    programs={'Python'}
                    description={'Started development of Python application for providing awareness of events' +
                    ' happening within a community through user post.'}
                    link={'https://github.com/bduarte27/community_posts'}>
                        <img className="item-pic" src={require("../images/community.jpg")} alt="Posting App" />
                </ProjectItem>
            </div>
        </div>
    );
}

export default Projects;