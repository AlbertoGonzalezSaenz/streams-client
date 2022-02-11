import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth';

const Header = (props) => {

    const [activeTag, setActiveTag] = useState({
        "1" : true,
        "2" : false
    })

    const handleClick = (e) => {
        const newState ={}
        const tabId = e.target.id
        for(const key of Object.keys(activeTag)){
            if(tabId === key){
                newState[key] = true
            }
            else {
                newState[key] = false
            }
        }
        setActiveTag(newState)
    }
    return (
        <div className="ui blue inverted segment">
            <div className="ui inverted secondary menu">
                <Link to ="/" className={`${activeTag[1] ? "active" : ""} teal item`} id="1" onClick={handleClick}>
                Streamy
                </Link>
                <div className="right menu">
                    <Link to="/" className={`${activeTag[2] ? "active" : ""} teal item`} id="2" onClick={handleClick}>
                    All Streams
                    </Link>
                    <GoogleAuth/>
                </div>
            </div>
        </div>
        // <div className="ui secondary pointing menu">
        //     <Link to="/" className="item ">Streamy</Link>
        //     <div className="right menu">
        //     <Link to="/" className="item "> All Streams</Link>
        //     </div>
        // </div>
    );
}

export default Header;