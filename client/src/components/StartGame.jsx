import React from 'react'

export default function StartGame() {

    return (
        <div className='start-game'>
                <p className='start-game-text'>Start Game</p>
            <div className='start-game-buttons-icons'>
                <img src='image.png' className='play-computer-icon'></img>
                <img src='image copy.png' className='play-online-icon'></img>
                <button className='play-computer-button'>Play Computer</button>
                <button className='play-online-button'>Play Online</button>
            </div>
        </div>
    )
}
