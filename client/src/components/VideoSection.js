import React from 'react';
import {Button} from './Button';
import '../assets/VideoSection.css'
import video from '../assets/video/video1.mp4'

export default function VideoSection(){
    return (
        <div className='video-container'>
            <video src={video} autoPlay loop muted/>
            <h3>CELEBRATE IN OUR BEST STYLES</h3>
            <p>From cosy knits to cool occasionwear, we've got festive all wrapped up.</p>
        </div>
    );
}