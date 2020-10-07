import React from 'react';

function ProjectItem(props) {
    return (
        <div className="item">
            <a href={props.link} target={'_blank'} rel="noopener noreferrer">
                {props.children}
                <h2>{props.name}</h2>
            </a>
            <h4><i>{props.programs}</i></h4>
            <p>{props.description}</p>
        </div>
    );

}

export default ProjectItem;