import React, { Component } from 'react'
import './Forms.css'
import Avatar from './Avatar.js'

export class Forms extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: [],
            userid: '',
            submitStatus: true,
            useridOb: []
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
        // const testid = this.state.useridOb.map(item => item.id)
        this.setState({
            user: [...this.state.user, this.state.userid],
            useridOb: [
                ...this.state.useridOb,
                { id: this.state.useridOb.length + 1, userid: this.state.userid }
            ],
            userid: '',
            submitStatus: true
        })
        event.preventDefault()
        console.log(this.state.user)
    }

    handleDelete(id) {
        let userSplice = [...this.state.user]
        let index = userSplice.indexOf(id)
        if (index !== -1) {
            userSplice.splice(index, 1)
            this.setState({ user: userSplice })
        }
    }

    render() {
        let avatars = this.state.user.map(
            key => <Avatar
                key={key}
                userid={key}
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

// TODO: fix delete functionality