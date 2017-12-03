import React from 'react';

export default ({ children, id, disabled = false, onClick }) => {
    const handleClick = e => onClick();
    
    return (
        <span className="actionPhotoButton" disabled={disabled} onClick={handleClick}>
            {children}
        </span>
    )
};