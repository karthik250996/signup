import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const getClassName = (name, currentPage) => currentPage === name ? 'nav-select' : 'nav';

export default (props) => {
    const currentPage = props.currentPage;
    return (
        <Nav className="justify-content-end">
            <div className="logo"><b>YOUR   </b> LOGO</div>
            <Nav.Item eventKey={1}>
                <Link to="/" className={getClassName('home', currentPage)}>
                    Home
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/aboutus" className={getClassName('aboutus', currentPage)}>
                    About Us
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/work" className={getClassName('work', currentPage)}>
                    Work
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/info" className={getClassName('info', currentPage)}>
                    Info
                </Link>
            </Nav.Item>
        </Nav>
    );
}
