/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Snake from "./Snake";
import Food from "./Food";

function Board() {
  const [direction, setDirection] = useState("RIGHT");
  const [position, setPosition] = useState({ x: 0, y: 0 });

  //   Update the position based on the current direction
  useEffect(() => {
    const updatePosition = () => {
      switch (direction) {
        case "UP":
          setPosition((prevPosition) => ({
            ...prevPosition,
            y: prevPosition.y - 1,
          }));
          break;
        case "DOWN":
          setPosition((prevPosition) => ({
            ...prevPosition,
            y: prevPosition.y + 1,
          }));
          break;
        case "LEFT":
          setPosition((prevPosition) => ({
            ...prevPosition,
            x: prevPosition.x - 1,
          }));
          break;
        case "RIGHT":
          setPosition((prevPosition) => ({
            ...prevPosition,
            x: prevPosition.x + 1,
          }));
          break;
        default:
          // Shouldn't reach here
          break;
      }
    };

    // Update the position at regular intervals (e.g., every 300 milliseconds)
    const intervalId = setInterval(updatePosition, 300);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [direction]); // Run the effect whenever the direction changes

  const handleKeyPress = (e) => {
    // Update the direction based on the key pressed
    switch (e.key) {
      case "ArrowUp":
        setDirection((prevDirection) => {
          console.log(prevDirection);
          return "UP";
        });

        break;
      case "ArrowDown":
        setDirection((prevDirection) => {
          console.log(prevDirection);
          return "DOWN";
        });
        break;
      case "ArrowLeft":
        setDirection((prevDirection) => {
          console.log(prevDirection);
          return "LEFT";
        });
        break;
      case "ArrowRight":
        setDirection((prevDirection) => {
          console.log(prevDirection);
          return "RIGHT";
        });
        break;
      default:
        // Ignore other keys
        break;
    }
  };

  return (
    <div>
      <div className="game-board">
        <Snake position={position} />
        <Food />
      </div>
      <button
        onClick={() => {
          window.removeEventListener("keydown", handleKeyPress);

          window.addEventListener("keydown", handleKeyPress);
        }}
      >
        Play
      </button>
    </div>
  );
}

export default Board;
