import React from 'react'
import './App.css'
import envelopeIcon from '../images/invite.png'
import GoogleContacts from './GoogleContacts.jsx'

export default function Friends() {
    return (
        <div className='invite-friends'>
            <div className='friends-top-half'>
                <div className='friends-text'>
                    <p>Friends</p>
                </div>
                <p className='select-friends-text'>Select friends you wish to connect with on Gridloq.</p>
                <div className='send-invite-text-and-icon'>
                    <p className='send-invite-text'>Don't see your friend below? Send them an email or a text invitation.</p>
                    <img className='friends-send-message-icon' src={envelopeIcon}></img>
                </div>
                <p className='google-contacts-text'>Google contacts:</p>
                <GoogleContacts />
            </div>

        </div>
    )
}
