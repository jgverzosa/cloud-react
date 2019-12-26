import React, {Component, browserHistory} from 'react'

export class UserDetail extends Component {

    handleBack(){
        browserHistory.push("/user-list");
    }

    render() {
        return (
            <div>
                <h1>User {this.props.params.id}</h1>
                <button onClick={() => this.handleBack()}>Back</button>
            </div>
        )
    }
}

export default UserDetail
