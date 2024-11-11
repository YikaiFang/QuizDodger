import React, { useState, useEffect } from 'react';
import './Obstacle.css';
import watermelon from './watermelon.png';

function Obstacle(props) {
  const [obstacles, setObstacles] = useState([]);

  useEffect(() => {
    const spawnObstacle = () => {
      if (props.pause) return;

      const id = Math.random().toString(36).substring(2, 9);
      const newObstacle = {
        id,
        x: Math.floor(Math.random() * (window.innerWidth - 150)),
        y: 0,
        speed: 8,
      };
      setObstacles((prevObstacles) => [...prevObstacles, newObstacle]);
    };

    const fallObstacles = () => {
      if (props.pause) return;

      setObstacles((prevObstacles) =>
        prevObstacles
          .map((obstacle) => {
            const updatedObstacle = { ...obstacle, y: obstacle.y + obstacle.speed };
            const obstX = updatedObstacle.x;
            const obstY = updatedObstacle.y;

            // Check for collision with player
            const hasCollided =
              obstY >= window.innerHeight - 2 * props.spriteSize &&
              obstX > props.position - props.spriteSize / 2 &&
              obstX < props.position + props.spriteSize / 2;

            if (hasCollided) {
              console.log('collision');
              props.handleCollision();
              props.setPause(true);
              return null; // Mark obstacle for removal
            }
            return updatedObstacle;
          })
          .filter((obstacle) => obstacle && obstacle.y < window.innerHeight - 70) // Remove nulls (collided obstacles) and off-screen obstacles
      );
    };

    const spawnInterval = setInterval(spawnObstacle, 300);
    const fallInterval = setInterval(fallObstacles, 40);

    return () => {
      clearInterval(spawnInterval);
      clearInterval(fallInterval);
    };
  }, [props.pause, props.position, props.spriteSize, props.handleCollision, props.setPause]);

  return (
    <div>
      {obstacles.map((obstacle) => (
        <img
          key={obstacle.id}
          src={watermelon} // Use the watermelon image for each obstacle
          alt="Obstacle"
          style={{
            position: 'absolute',
            left: obstacle.x, // Set left position based on obstacle's x value
            top: obstacle.y, // Set top position based on obstacle's y value
            width: props.spriteSize/1.3, // Set the width of the image based on sprite size
            height: props.spriteSize/1.3, // Set the height of the image based on sprite size
          }}
        />
      ))}
    </div>
  );
}

export default Obstacle;
