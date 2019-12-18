import React, { Component } from 'react'
import './Forms.css'
import Avatar from './Avatar.js'

export class Forms extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: [],
            userid: '',
            submitStatus: true
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleChange(event) {
        this.setState({
            userid: event.target.value,
            submitStatus: false
        })
    }

    handleSubmit(event) {
        this.setState({
            user: [...this.state.user, this.state.userid],
            userid: '',
            submitStatus: true
        })
        event.preventDefault()
    }

    handleDelete(id) {
        this.setState(prevState => ({
            user: prevState.user.filter(userid => userid !== id)
        }));
    }

    render() {
        let avatars = this.state.user.map(
            (userid, key) => <Avatar
                key={key}
                userkey={key}
                userid={userid}
                onDelete={this.handleDelete}
            />
        ).reverse()

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="input-userid"
                        type="text"
                        autoFocus={true}
                        placeholder="Enter User ID"
                        value={this.state.userid}
                        onChange={this.handleChange}
                    />
                    <button
                        className="submit-btn"
                        type="submit"
                        disabled={this.state.submitStatus}
                    >
                        Submit
                    </button>
                </form>
                {avatars}
            </div>
        )
    }
}

export default Forms
// PARENT