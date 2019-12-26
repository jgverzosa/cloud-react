import React, { Component } from 'react'
import './Forms.scss'
import {  Link} from 'react-router-dom'
import axios from 'axios'
// const Avatar = React.lazy(() => import('./Avatar'));
// const UserDetail = React.lazy(() => import('./UserDetail'));

export class UserList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: [],
            userId: '',
            submitStatus: true,
            view: false,
            viewId: ''
        }
        // this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleDelete = this.handleDelete.bind(this)

        // this.handleView = this.handleView.bind(this)
    }

    componentDidMount() {
        this.apiUser()
    }

    apiUser() {
        axios.get('https://reqres.in/api/users/') // + this.props.userId
            .then((res) => {
                // console.log(res.data.data)
                this.setState({
                    user: res.data.data,
                    // isError: false,
                    // isLoading: false
                })
            })
            .catch((error) => {
                if (!error) {
                    // this.setState({
                    //     isError: false,
                    //     isLoading: false
                    // })
                } else {
                    // this.setState({
                    //     isError: true,
                    //     itsError: error.message,
                    //     isLoading: false
                    // })
                }
            })
            .finally()
    }

    render() {

        let user_list = this.state.user.map((user, index) =>             
            <li key={index}><img src={user['avatar']} alt="test" /><br/><Link to={"/user/"+user['id']}>{user['first_name']} {user['last_name']}</Link></li>                       
        )

        return (
            <div>
                <ul className="user-class">
                    {user_list}
                </ul>
            </div>
        )
    }
}

export default UserList
// PARENT

// TODO: fix delete functionality