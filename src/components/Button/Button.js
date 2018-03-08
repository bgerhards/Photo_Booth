import React from 'react';

export default ({ children, id, disabled = false, onClick, className = "btn btn-primary btn-lg" }) => {
    const handleClick = e => onClick();
    
    return (
        <span id={id} className={className} disabled={disabled} onClick={handleClick}>
            {children}
        </span>
    )
};
