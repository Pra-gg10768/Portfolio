import React, { forwardRef } from 'react';

const Experience = forwardRef((props, ref) => {
    return (
        <div id="experience" ref={ref} className="section">
            <h1 className="section-title">Experience</h1>
            <p className="section-description">
                Here is an overview of my work experience in the field of software development and related industries.
            </p>
        </div>
    );
});

export default Experience;
