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
            viewId: '',
            page: 1,
            per_page:3,
            total_pages:null,
            show: true
        }
        this.loadMore = this.loadMore.bind(this)
    }

    componentDidMount() {
        this.apiUser(this.state.page)
    }

    loadMore(){
        let p= this.state.page+1
        this.setState({
            page: p
        })
        this.apiUser(p)
    }

    apiUser(num) { 
        axios.get("/get-users",
            { params: {page: num, per_page:this.state.per_page}}) // + this.props.userId
            .then((res) => {
                console.log(res.data)
                this.setState({
                    user: [...this.state.user, ...res.data.data],
                    total_pages: res.data.total_pages
                })
                if(res.data.total_pages === num){
                    this.setState({
                        show: false,
                    })
                }               
            })
            .catch((error) => {})
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
                {this.state.show?<button className="show-btn" onClick={this.loadMore}>Show more</button>:<p className="no-show">Nothing to show</p>}
                <br/>
            </div>
        )
    }
}

export default UserList
// PARENT

// TODO: fix delete functionality