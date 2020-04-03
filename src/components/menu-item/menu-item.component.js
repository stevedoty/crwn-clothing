import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = (props) => (
    <div
        className={`${props.section.size} menu-item`}
        onClick={() => props.section.history.push( props.section.linkUrl )}
    >
        <div className='background-image' style={{backgroundImage: `url(${props.section.imageUrl})`}} />
        <div className='content'>
            <h1 className='title'>{props.section.title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);