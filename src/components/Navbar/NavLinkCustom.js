import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

const NavLinkCustom = ({label, to, activeOnlyWhenExact, srcImg}) => {
    let match = useRouteMatch({
        path : to,
        exact : activeOnlyWhenExact
    })
    return (
        <li className={`${match ? 'active' : ''}`}>
            <Link to={to}>
                <span>{label}</span>
                {
                    srcImg ? 
                    <img src={`${process.env.PUBLIC_URL}/${srcImg}`} alt=""/> :
                    ""
                }
            </Link>
        </li>
    )
};

export default NavLinkCustom;