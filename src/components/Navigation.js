import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Avatar } from 'antd'


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
    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    if (event.target === document.body)
                        setMenuActive(false)
                }
            }

            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    let [menuActive, setMenuActive] = useState(false)
    const wrapperRef = useRef(null)
    useOutsideAlerter(wrapperRef)
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
