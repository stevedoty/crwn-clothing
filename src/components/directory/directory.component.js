import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectDirectorySections} from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component.js';



import './directory.styles.scss';


const Directory = ( {sections, history}) => (
    <div className='directory-menu'>
        {sections.map( section => (
            <MenuItem key={section.id} section={section} history={history}  />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);