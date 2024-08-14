import React from 'react';
import './Grid.css';

export const HowToPlay = () => {


  return (
    <div className="howToPlay">
      <header>How to Play</header>

      <div className='pageContent'>
        <main>
          <div className='mainInstructionsContainer'>
            <h3 className='containerHeader'>Game Instructions</h3>
                
            <ol className='mainOl'>
              <li className='mainLi'>Select to play against the computer or an opponent online.</li>
              <li className='mainLi'>Random player makes the first move in a new game.</li>
              <li className='mainLi'>On your turn, the PowerUp machine will automatically roll. If you receive a PowerUp, select to play it or skip.</li>
              <li className='mainLi'>Make your move by selecting a tile. The higher the value, the more points you collect.</li>
              <li className='mainLi'>Once you connect a minimum of 3 tiles, your total tile points is multiplied by the number of tiles you have in a row. For example: You have 3 tiles valued at 4, 3, and 2 = 9, 9 point x 3 tiles = 27.</li>
              <li className='mainLi'>The first player to collect 40 points is the winner.</li>
              <li className='mainLi'>If a player takes longer than 10 minutes to make a move, they automatically forfeit the game.</li>
            </ol>

            <button className='mainButton'>START A GAME</button>
          </div>
            
        </main>

        <aside>
          <div className='asidePowerupContainer'>
            <h3 className='containerHeader'>PowerUps</h3>

            <p className='asideDescription'>A PowerUp Booster is automatically given once a day.  It allows a player to have a higher chance of winning a specific power up on every spin for one game. Example: If you buy a bomb power up booster, the chances of winning that bomb on every spin goes from 1:12 to 1:6 chance. You are limited to 1 PowerUp Booster per game.</p>
          
            <div className='asideBomb powerUpContainer'>
              <span className='Icon'>💣</span>
              <span>Bomb:</span> 
              <span>Blow up your opponent's tile, including another connected tile.</span> 
            </div>

            <div className='asideSteal powerUpContainer'>
              <span className='Icon'>✋</span>
              <span>Steal:</span> 
              <span>Take a tile from your opponent, or can be used to remove a fortify, 2x or 3x</span> 
            </div>
            
            <div className='asideTwoX powerUpContainer'>
              <span className='Icon'>2X</span>
              <span>2x:</span> 
              <span>Double your points on your tile selection. Can be removed by a bomb or steal.</span> 
            </div>
            
            <div className='asideThreeX powerUpContainer'>
              <span className='Icon'>3X</span>
              <span>3x:</span> 
              <span>Triple your points on your tile selection. Can be removed by a bomb or steal.</span> 
            </div>
          </div>

          <div className='asideSubscriptionContainer'>
            <p>Need More PowerUps?</p>
            <p>Recieve a higher-level Powerup when you send an invitation to your friends and they join the game.</p>
            <br />
            <p>Subscribe now and receive monthly rewards.</p>
          </div>
        </aside>
      </div>   
      
    </div>
  );
};
