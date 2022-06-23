import React from 'react';
import { Link } from "react-router-dom";

//Styling:
import '../Nav/NavComponents.css';

function NavComponent() {
    return (
        <>
            <Link to='/'>
                <img
                    src='https://www.pngmart.com/files/2/Pokeball-PNG-Photos.png'
                    alt='pokeball-logo'
                    className="pokeball-logo">
                </img>
            </Link>
            <div key='Pokemon'>

                <Link to='/pokemon' style={{ textDecoration: 'none' }}>
                    <h2>Pokemon</h2>
                </Link>
            </div>

            <div key='Locations'>
                <Link to="/locations" style={{ textDecoration: 'none' }}>
                    <h2>Locations</h2>
                </Link>
            </div>

            <div key='Berries'>
                <Link to="/berries" style={{ textDecoration: 'none' }}>
                    <h2>Berries</h2>
                </Link>
            </div>
        </>
    )
}

export default NavComponent