import React from 'react'

function UserMessage(props) {
  return (
    <div>
      {props.isLoggedIn ? (
            <div>
                <p>Welcome to the site! Please complete steps below:</p>
                <ol>
                    <li>Confirm your email</li>
                    <li>Complete your Profile</li>
                </ol>
            </div>
        ) : (<p>Please sign in</p>)}
    </div>
  )
}

export default UserMessage
