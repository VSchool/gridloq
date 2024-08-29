import React from 'react'
import handshakeIcon from '../images/friends.png'


export default function GoogleContacts() {
    return (
        <div className='friends-bottom-half'>
            <div className='friends-name-email-text'>
                <p className='friends-name-text'>Name</p>
                <p className='friends-email-text'>Email</p>
            </div>
            <div className='friends-user-name-email-icons'>
                <div className='checkbox'></div>
                <p className='friends-user-name'>Charlie Chow</p>
                <p className='friends-user-email'>charlieischow@hotmail.com</p>
                <img className='handshake-icon' src={handshakeIcon}></img>
            </div>

        </div>
    )
}
