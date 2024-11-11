import React, {useState, useEffect} from 'react';
import './Obstacle.css';

function Obstacle() {
    const [obstacles, setObstacles] = useState([]);

    useEffect(() => {
        const spawnObstacle = () => {
            const id = Math.random().toString(36).substring(2, 9);
            const obstacle = {
                id,
                x: Math.floor(Math.random() * (window.innerWidth - 100)),
                y: 0,
                speed: 7.5
            };
            setObstacles((prevObstacle) => [...prevObstacle, obstacle]);
        };
        
        const spawnInterval = setInterval(spawnObstacle, 2200);
        const fallInterval = setInterval (() => {
            setObstacles((prevObstacle) => 
                prevObstacle
                    .map((obstacle) => ({
                        ...obstacle,
                        y: obstacle.y + obstacle.speed
                    }))
                .filter((obstacle) => obstacle.y < window.innerHeight - 70)
            );
        }, 50);
        return () => {
            clearInterval(spawnInterval);
            clearInterval(fallInterval);
        }
    }, []);

    return (
        <div>
          {obstacles.map((obstacle) => (
            <div
              key={obstacle.id}
              className="obstacle"
              style={{
                transform: `translate(${obstacle.x}px, ${obstacle.y}px)`,
              }}
            />
          ))}
        </div>
      );
}

export default Obstacle;