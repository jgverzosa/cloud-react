import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navi.scss'

export class Navigation extends Component {
    render() {
        return (
            <div>
                <nav className="nav">
                    <ul>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/user-list">User List</Link></li>
                        {/* <li><Link to="/user">User</Link></li> */}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navigation
