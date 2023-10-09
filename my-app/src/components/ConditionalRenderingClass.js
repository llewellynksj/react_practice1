import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: false,
         isLoggedIn: true,
      }
    }
    
    render() {
    return (
      <div>
        <h1>{this.state.isLoaded ? 'Data Loaded' : 'Loading...'}</h1>
        {this.state.isLoggedIn ? (
            <div>
                <p>Welcome to the site! Please complete steps below:</p>
                <ol>
                    <li>Confirm email</li>
                    <li>Complete Profile</li>
                </ol>
            </div>
        ) : (<p>Please sign in</p>)}
      </div>
    )
  }
}

export default ConditionalRenderingClass
