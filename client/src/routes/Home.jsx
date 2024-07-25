import React from 'react';
import './Grid.css';

export const Home = () => {
  const Grid = ({ size }) => {
    const renderGrid = () => (
      Array.from({ length: size }, (_, rowIndex) => (
        <div key={rowIndex} className="row">
          {Array.from({ length: size }, (_, cellIndex) => (
            <div key={`${rowIndex}-${cellIndex}`} className="cell">
            </div>
          ))}
        </div>
      ))
    );

    return <div className="grid">{renderGrid()}</div>;
  };

  return (
    <div className="home">
      <h1>Gridloq</h1>
      <Grid size={7} />
    </div>
  );
};
