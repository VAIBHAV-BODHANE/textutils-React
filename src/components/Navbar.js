import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    const darkMode = () => {
        props.toggleMode('dark')
    }
    const lightMode = () => {
        props.toggleMode('light')
    }
    const successMode = () => {
        props.toggleMode('success')
    }
    const dangerMode = () => {
        props.toggleMode('danger')
    }
    const warningMode = () => {
        props.toggleMode('warning')
    }
    const infoMode = () => {
        props.toggleMode('info')
    }
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${(props.mode === 'dark'?'dark':(props.mode ==='light'?'light':'dark'))} bg-${props.mode}`}>
                <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">{props.aboutText}</Link>
                    </li>
                    </ul>
                    {/* <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    <div className={`text-${props.mode==='light'?'dark':'light'}`}>
                    {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}> */}
                        {/* <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label> */}
                        
                        <button className={`btn btn-dark p-2 mx-1 border border-${props.mode==='light'?'dark':'light'}`} onClick={darkMode} type="button"></button>
                        <button className={`btn btn-light p-2 mx-1 border border-${props.mode==='light'?'dark':'light'}`} onClick={lightMode} type="button"></button>
                        <button className={`btn btn-success p-2 mx-1 border border-${props.mode==='light'?'dark':'light'}`} onClick={successMode} type="button"></button>
                        <button className={`btn btn-danger p-2 mx-1 border border-${props.mode==='light'?'dark':'light'}`} onClick={dangerMode} type="button"></button>
                        <button className={`btn btn-warning p-2 mx-1 border border-${props.mode==='light'?'dark':'light'}`} onClick={warningMode} type="button"></button>
                        <button className={`btn btn-info p-2 mx-1 border border-${props.mode==='light'?'dark':'light'}`} onClick={infoMode} type="button"></button>
                    </div>
                </div>
                </div>
            </nav>
        </div>
    )
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string,
}

Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "About text here"
}