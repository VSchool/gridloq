import Tile from "../components/Tile"

export const Home = () => {
  return (
    <div>
      <h1>V School Work Experience Project Template</h1>
      <p>Project includes:</p>
      <ul>
        <li>User authentication</li>
        <li>Routing</li>
        <li>Socket.io integration</li>
      </ul>
      
      {/* template tiles */}
      <Tile 
        background={"orangeGradient-background"} 
        indicator={"none"} 
        sections={1} 
        worth={1} 
        bottom={"none"} 
      />
      <Tile 
        background={'greenGradient-background'}
        indicator={"X"} 
        sections={2} 
        worth={2} 
        bottom={"none"} 
      />
    </div>
  )
}