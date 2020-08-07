import React, { useEffect, useState } from 'react';
import './grid-section.styles.scss';

const GridSection = ({sliderNumber}) => {
    return (
        <div className='grid-section-container'>
            <div className={`grid-item ${sliderNumber === 1 ? 'blue' : ''}`}></div>
            <div className={`grid-item ${sliderNumber === 2 ? 'green' : ''}`}></div>
            <div className={`grid-item ${sliderNumber === 3 ? 'red' : ''}`}></div>
            <div className={`grid-item ${sliderNumber === 4 ? 'orange' : ''}`}></div>
            <div className={`grid-item ${sliderNumber === 5 ? 'purple' : ''}`}></div>
        </div>
    )
}

export default GridSection;