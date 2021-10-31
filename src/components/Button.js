import React from 'react';

function Button({color="white",bgcolor,text,...rest}) {
    return (
            <div className="btn" {...rest} style={{color:color,backgroundColor:bgcolor}}>{text}</div>
        );
}

export default Button;