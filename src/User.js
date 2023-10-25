import React from "react";

class User extends React.Component {
    constructor() {
        super();
        this.state={
            email:"radhey@test.com"
        }
    }
    render() {
        console.log("Render Method", this.state.email)
        return (
        <div className="App">
            <h1>User Component Email: {this.state.email}</h1>
            <button onClick={()=>this.setState({email:"jhorar@test.com"})}>Update Email</button>
        </div>
        );
    }
}

export default User;
