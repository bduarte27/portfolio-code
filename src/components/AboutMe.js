import React from 'react';

import Pdf from '../resume.pdf'

function AboutMe() {
    return (
        <div className={'about'}>
            <h1>Brian Duarte</h1>
            <h3>Software Developer</h3>
            <p>Hey! My name is Brian Duarte and I am a Computer Science major at the University of California, Irvine.
                I love keeping things simple and maintaining my inner peace.
                Some of my hobbies include hiking, exercising, and playing video games.
                I also always look forward to eating foods from different cultures, traveling to new places, and
                meeting new people.
            </p>
            <a href={Pdf} target={'_blank'} rel="noopener noreferrer">
                <button>Resume</button>
            </a>
        </div>
    );

}

export default AboutMe;