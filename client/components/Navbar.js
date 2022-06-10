import React from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <div className="container">
                    <Link to={'/'} className={'navbar-brand'}>
                        NodeStream
                    </Link>
                    <button className="" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""/>
                    </button>

                    <div className="" id="navbarSupportedContent">
                        <ul className="">
                            <li className="">
                                <Link className={'nav-link'} to={'/settings'}>
                                    Press to Go Live
                                </Link>
                            </li>
                            <li className="">
                                <a className="" href="/Logout">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
