import React, {useState, useEffect} from 'react';
import rightCapy from './rightCapyO.png'
import leftCapy from './leftCapyO.png'


const Player =(props) => {
    const spriteSize = window.innerHeight * 15/100;
    // const [position, setPosition] = useState((window.innerWidth - spriteSize) / 2);
    // const [newPosition, setNewPosition] = useState((window.innerWidth - spriteSize) / 2);
    const moveSpeed = 20;
    const screenWidthRight = window.innerWidth - spriteSize*2;
    const screenWidthLeft = 0;
    const [goingLeft, setGoingLeft] = useState(false)
    

    useEffect(() => {
        const handleKeyDown = (event) => {
            function getNewPosition(prevPosition) {
                switch (event.key) {
                    case 'ArrowLeft':
                        setGoingLeft(true)
                        return Math.max(prevPosition - moveSpeed, screenWidthLeft);
                    case 'ArrowRight':
                        setGoingLeft(false)
                        return Math.min(prevPosition + moveSpeed, screenWidthRight + spriteSize);
                    default:
                        return prevPosition;
                }
            }
            props.setPosition((prevPosition) => getNewPosition(prevPosition));
        };
    
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [props, screenWidthRight, spriteSize, goingLeft]); // Add `position` as a dependency
    

    return (
        <img
          src={goingLeft ? leftCapy : rightCapy} // PNG file source
          alt="Player"
          style={{
            position: 'absolute',
            left: `${props.position}px`, // Position based on props
            top: window.innerHeight - 1.5 * spriteSize, // Fixed vertical position
            width: spriteSize,
            height: spriteSize,
          }}
        />
    );

}

export default Player;