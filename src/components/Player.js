import React, {useState, useEffect} from 'react';

const Player =() => {
    const spriteSize = window.innerHeight * 15/100;
    const [position, setPosition] = useState((window.innerWidth - spriteSize) / 2);
    const moveSpeed = 10;
    const screenWidthRight = window.innerWidth - spriteSize*2;
    const screenWidthLeft = 0;

    const handleKeyDown = (event) => {
        setPosition((prevPosition) => {
            switch(event.key) {
                case 'ArrowLeft':
                    if (prevPosition - moveSpeed >= screenWidthLeft) {
                        return prevPosition - moveSpeed;
                    }
                    return prevPosition;
                case 'ArrowRight':
                    if (prevPosition + moveSpeed <= screenWidthRight + spriteSize) {
                        return prevPosition + moveSpeed;
                    }
                    return prevPosition
                default:
                    return prevPosition;
    
            }
        });
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, []);

    return (
        <div
          style={{
            position: 'absolute',
            left: `${position}px`, // Position is based on the state
            top: window.innerHeight - 1.5 * spriteSize, // Fixed vertical position
            width: spriteSize,
            height: spriteSize,
            backgroundColor: 'blue', // Player color
          }}
        />
    );

}

export default Player;