import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

function Header(props) {
    return (
        <div className="ui secondary pointing menu">
            <Link to = "/" className="item">
                Stream
            </Link>
            <Link to = "/all" className="item active">
                All Streams
            </Link>
            <div className="right menu">
                <Link to = "/login" className="ui item">
                    <GoogleAuth />
                </Link>
            </div>
        </div>
    );
}

export default Header;