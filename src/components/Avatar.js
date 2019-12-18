import React, { Component } from 'react'
import './Avatar.css'
import axios from 'axios'


export class Avatar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            time: new Date().toLocaleString(),
            isError: false,
            isLoading: true,
            user: []
        }
    }

    componentDidMount() {
        this.apiUser()
        // console.log(3)
    }

    componentWillUnmount() {
        // console.log(3)
    }

    apiUser() {
        axios.get('https://reqres.in/api/users/' + this.props.userid)
            .then((res) => {
                // console.log(res.data.data);
                this.setState({
                    user: res.data.data,
                    isError: false,
                    isLoading: false
                })
            })
            .catch((error) => {
                // handle error
                // console.log(error.message);
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
            .finally(function () {
                // always executed
                // console.log('finally');
            });
    }

    onDelete(id) {
        this.props.onDelete(id);
        // console.log(this.props.onDelete)
    }



    render() {
        let isError = this.state.isError
        // console.log(isError)
        // let deleteUser = this.state.user.map((el) =>
        //     <button onClick={this._handleDelete.bind(this, el)}>x</button>
        // )
        let message
        if (isError) {
            message = <div className="error"> --------------------------- <br />
                <strong>ERROR:</strong> {this.state.itsError}<br />
                ---------------------------</div>
            // console.log(5)
        } else {
            // console.log(6)
            message =
                <div className="profile">
                    <div className="details-item">
                        {this.state.user.id ? <img src={this.state.user.avatar} alt="test" /> : ""}
                    </div>
                    <div className="details-item">
                        <span>{this.state.user.first_name} {this.state.user.last_name}</span><br />
                        {this.state.user.email}<br />
                        {this.state.time}
                    </div>
                    <div className="details-item del-btn">
                        <button onClick={this.onDelete.bind(this, this.props.userid)}>x</button>
                    </div>
                </div >
        }

        return (
            <div>
                {this.state.isLoading ? "Loading..." : message}
            </div>
        )
    }
}

export default Avatar
//CHILD