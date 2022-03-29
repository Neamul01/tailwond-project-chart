import React from 'react';

const Nav = (props) => {
    const { name, link } = props.nav;
    return (
        <li className='mr-16'>
            <a href={link}>{name}</a>
        </li>
    );
};

export default Nav;