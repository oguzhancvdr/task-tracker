import React from 'react'
import Button from './Button'
// import PropTypes from 'prop-types';

function Header({title}) {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="purple" text="Show Create a Task Bar" />            
        </header>
    )
}


// Header.defaultProps = {
//     title: 'Task Tracker as default'
// }

// Header.propTypes = {
//     title: PropTypes.string.isRequired,
// };

export default Header
