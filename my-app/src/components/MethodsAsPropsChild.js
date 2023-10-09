import React from 'react'

function MethodsAsPropsChild(props) {
  return (
    <div>
      {props.isLoggedIn ? (
            <div>
                <p>Welcome to the site! Please complete steps below:</p>
                <ol>
                    <li>Confirm your email</li>
                    <li>Complete your Profile</li>
                </ol>
                <button onClick={props.handleSignOut}>Sign Out</button>
            </div>
        ) : (
        <div>
            <p>Please sign in</p>
            <button onClick={props.handleSignIn}>Sign In</button>
        </div>)}
    </div>
  )
}

export default MethodsAsPropsChild
