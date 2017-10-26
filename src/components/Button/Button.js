import React from 'react';

// import './Button.css';

export default ({ children, id, disabled = false, onClick }) => {
    const handleClick = e => onClick();
    
    return (
        <button id={id} className="btn btn-primary btn-lg" disabled={disabled} onClick={handleClick}>
            {children}
        </button>
    )
};