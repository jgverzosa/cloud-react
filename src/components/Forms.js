import React, { Component } from 'react'
import './Forms.css'
import Avatar from './Avatar.js'

export class Forms extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: [],
            userId: '',
            submitStatus: true,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleChange(event) {
        this.setState({
            userId: event.target.value,
            submitStatus: false
        })
    }

    handleSubmit(event) {
        this.setState({
            user: [...this.state.user, this.state.userId],
            userId: '',
            submitStatus: true
        })
        event.preventDefault()
    }

    /**
     * This function can be call inside of the the Avatar.js component by passing it as props
     * @param {*} index 
     */
    handleDelete(index) {
        let userSplice = this.state.user
        if(index !== -1){
            userSplice.splice(index, 1)
            this.setState({ user: userSplice })
        }
    }

    render() {
        let avatars = this.state.user.map((user, index) => 
            <Avatar
                key={index+'-'+user} // Makes the key unique
                userId={user} // Fetch the user id Avatar.js->apiUser
                index={index} // Defined as array position and will be bind into Avatar.js->onDelete
                onDelete={this.handleDelete} // Can be use in the Avatar.js
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
                        value={this.state.userId}
                        onChange={this.handleChange}
                    />
                    <button
                        className="submit-btn"
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