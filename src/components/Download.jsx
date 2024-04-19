// File Path: /src/components/Download.jsx
import React from 'react';

const Download = () => {
    return (
        <div className="download">
            <h1>Download</h1>
            <p>To download Genventory, click the link below...</p>

            <a href="/download/wormworld-setup.exe" download>Download ..</a>
        </div>
    );
};

export default Download;
