import React from 'react';
import {Link} from 'react-router-dom';

export default function Home(props){
    return(
        <div>
            <div className = 'home-contain'>
                <div className = 'pic-text-main'>
                    <img src = ''/>
                    <h3></h3>
                </div>
                <div  className = 'skills'>
                    <div>
                        <div className= 'skills-img'>
                            <img className = 'skills-imgs' src = 'https://images.unsplash.com/photo-1469939868368-83e00d69432e?ixlib=rb-0.3.5&s=630cb094d0762aad9500d3fc48171372&auto=format&fit=crop&w=750&q=80' alt = 'piano'/>
                            <img className = 'skills-imgs' src = 'https://images.unsplash.com/photo-1487089427585-85563b1049f3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=94a38034c192407d90344aac0cf0f656&auto=format&fit=crop&w=890&q=80' alt = 'vocals'/>
                            <img className = 'skills-imgs' src = 'https://images.unsplash.com/photo-1465225314224-587cd83d322b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b30ae759059ac8e7562ad32f1c7417ee&auto=format&fit=crop&w=750&q=80' alt = 'guitar'/>
                        </div>
                        <div className = 'skills-names'>
                            <h2>Piano</h2>
                            <h2>Vocals</h2>
                            <h2>Guitar</h2>
                        </div>
                        <div className = 'video-lyrics'>
                            <video width = '600' height = '400' controls>
                                <source src = '' type = 'video/mp4'/>
                            </video>
                            <div className = 'lyrics'>
                                <h3>Lyrics:</h3>
                                <p>---------------------------------------------------------------------------------------------------------------------------------</p>
                            </div>
                        </div>
                        <div className = 'footer-contain'>
                            <h1 className = 'rs-logo' >RS</h1>
                            <p className = 'copyright' >Copyright Rebekah Sorensen</p>
                            <ul className = 'tabs'>
                                <Link className = 'links' to = '/'><li>Home</li></Link>
                                <Link className = 'links' to = '/about'><li>About</li></Link>
                                <Link className = 'links' to = '/contact'><li>Contact</li></Link>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
