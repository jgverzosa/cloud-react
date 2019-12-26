import React, { Component } from 'react'
import './Avatar.css'
import axios from 'axios'
import ThemeContext from './ThemeContext'

export class Avatar extends Component {

    static contextType = ThemeContext;

    constructor(props) {
        super(props)
        this.state = {
            time: new Date().toLocaleString(),
            isError: false,
            isLoading: true,
            user: []
        }
        // this.onDelete = this.onDelete.bind(this, this.props.index)
    }

    componentDidMount() {
        this.apiUser()
    }

    apiUser() {
        axios.get('https://reqres.in/api/users/' + this.props.match.params.id)
            .then((res) => {
                this.setState({
                    user: res.data.data,
                    isError: false,
                    isLoading: false
                })
            })
            .catch((error) => {
                if (!error) {
                    this.setState({
                        isError: false,
                        isLoading: false
                    })
                } else {
                    this.setState({
                        isError: true,
                        itsError: error.message,
                        isLoading: false
                    })
                }
            })
            .finally(() => {});
    }

    // onDelete(id) {
    //     this.props.onDelete(id);
    // }

    render() {
        let isError = this.state.isError
        let message
        if (isError) {
            message = 
                <div className="error"> 
                    ---------------------------<br />
                    <strong>ERROR:</strong> {this.state.itsError}<br />
                    ---------------------------
                </div>
        } else {
            message =
                <div className="profile">
                    <div className="details-item">
                        {this.state.user.id 
                            ? <img src={this.state.user.avatar} alt="test" /> 
                            : ""}
                    </div>
                    <div className="details-item"><br/>
                        <span>{this.state.user.first_name} {this.state.user.last_name}</span><br />
                        {this.state.user.email}<br />
                        {this.state.time}
                    </div>
                </div >
        }
        return (
            <div>
                <small>context: {this.context}</small>
                <br/>
                {this.state.isLoading ? "Loading..." : message}
            </div>
        )
    }
}

export default Avatar