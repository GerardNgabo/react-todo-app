import React from 'react';
import Button from './button';

const Header = ({title}) => {
    return (  
        <header className="header">
            <h1>{title}</h1>
            <Button color='green' text='ADD' />
            
        </header>
    );
}

export default Header;