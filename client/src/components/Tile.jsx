import React from "react";

export default function Tile(props){
/** 
 * background = background of tile
 * sections = the number of things displayed on tile (1, 2, or 3)
 * indicator = Thing in center of tile (X, O, or none)
 * worth = how much the tile is worth (1 - 4 currently) 
 * bottom = is there something on bottom right
*/
  const {background, indicator, sections, worth, bottom} = props

  return(
    sections === 1 
    ?
    <div className={`${background}  tile`}>
      { indicator === "none"  
      ?
        <p className="tile-main large-indicator">{worth}</p>
      :
        <p className="tile-main large-indicator">{indicator}</p>
      }
    </div>
    :
    <div className={`${background} tile`}>
      <p className="tile-top">{worth}</p>
      <p className="tile-main small-indicator">{indicator}</p>
      {bottom !== "none" && <img className="tile-icon" src={bottom}/>}
    </div>
  )
}