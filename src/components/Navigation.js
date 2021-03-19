import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import { Avatar } from 'antd'
import { useOutsideClick } from '../hooks/useOutsideClick'

const navLinks = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "Blog",
        path: "/blog"
    },
    {
        title: "Contact Us",
        path: "/contact-us"
    },
    {
        title: "Login",
        path: "/login"
    }
]

const Navigation = ({ user }) => {
    let [menuActive, setMenuActive] = useState(false)
    const wrapperRef = useRef(null)
    useOutsideClick(wrapperRef, setMenuActive)
    return (
        <nav className="site-navigation">
            <span className="menu-title">ABC Blog</span>
            <div className={`menu-content-container ${menuActive && 'active'}`} ref={wrapperRef} >
                <ul>
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <Link to={link.path}>{link.title}</Link>
                            </li>
                        ))
                    }
                </ul>
                <span className="menu-avatar-container">
                    <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        size={38}
                    />
                    <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span>
                </span>
            </div>
            <i className="ionicons icon ion-ios-menu" onClick={() => setMenuActive(!menuActive)} />
        </nav>
    );
};

export default Navigation;
