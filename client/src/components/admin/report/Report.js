import React from 'react';
import '../../../assets/Report.css'
import Iframe from 'react-iframe'

function Report(props) {
    return (
        <div className="report">
            <div className="report-container">
            <Iframe url="https://kq.retool.com/embedded/public/868d5712-f427-4317-b16e-7a9242870a9a"
                width="100%"
                height="100%"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"/>
            </div>
        </div>
    );
}

export default Report;