import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(props){
    return (
        <div>
            <div className = 'header'>
            <Link className = 'links' to = '/'><h1 className = 'rs-logo'>RS</h1></Link>
            <nav>
                <ul className = 'tabs'>
                    <Link className = 'links' to = '/'><li>Home</li></Link>
                    <Link className = 'links' to = '/about'><li>About</li></Link>
                    <Link className = 'links' to = '/contact'><li>Contact</li></Link>
                </ul>
            </nav>
            </div>
            
        </div>
    )
}