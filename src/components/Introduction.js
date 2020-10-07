import React from 'react';

import AboutMe from "./AboutMe";

function Introduction() {
    return (
        <div className={'intro'}>
            <img className="selfie" src={require("../images/selfie.jpg")} alt="Selfie" />
            <AboutMe />
        </div>
    );

}

export default Introduction;