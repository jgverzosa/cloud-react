import React, { Component } from 'react'
import './Forms.css'
import Avatar from './Avatar.js'

export class Forms extends Component {

    constructor(props) {
        super(props)
        this.state = {
          user: [],
          userid: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)         
        this.handleDelete = this.handleDelete.bind(this)     
    }

    handleChange(event) {
        this.setState({userid: event.target.value})        
    }
  
    handleSubmit(event) {  
        this.setState({user: [this.state.userid,...this.state.user]})
        event.preventDefault()
    }
  
    handleDelete(id) {
        console.log(id);
        console.log(this.state.user);
        this.setState((prevState) => ({
            user: prevState.user.filter(item => item !== id),
        }))
    }
        
    render() {
        let avatars = this.state.user.map(userid => <Avatar key={userid} userid={userid} onDelete={ this.handleDelete }/>)
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.userid} onChange={this.handleChange} /> 
                <button className="submit-btn" type="submit">Submit</button>
                </form>
                {avatars}
            </div>
        )
    }
}

export default Forms
