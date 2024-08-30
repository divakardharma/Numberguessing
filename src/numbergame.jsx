
import React, { useState, useEffect } from "react";
import './numbergame.css';
import WatchImg from './assests/gig1.gif'; 
import WatchImg2 from './assests/gig2.gif';

const NumberGuessingGame = () => {

  const [inputValue, setInputValue] = useState("");      
  const [outputMessage, setOutputMessage] = useState("");
  const [outputColor, setOutputColor] = useState("blue");
  const [isGameOver, setIsGameOver] = useState(false);   
  const [showImage, setShowImage] = useState(false); 
  const [showImage1, setShowImage1] = useState(false); 
  const [randomNumber, setRandomNumber] = useState(0);   

  useEffect(() => {
    const x = Math.floor(Math.random() * 100) + 1; 
    setRandomNumber(x);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    if (!inputValue) {
      setOutputMessage("Enter A Number!!");
      setOutputColor("red");
      return;
    }

    const userGuess = parseInt(inputValue, 10);

    if (userGuess === randomNumber) {
      setOutputMessage(`You guessed right, your number is ${randomNumber}`);
      setOutputColor("#00e300");
      setShowImage(true); 
      setIsGameOver(true);

      const dotInterval = setInterval(() => {
        setOutputMessage((prevMessage) => prevMessage + ".");
      }, 500);

      setTimeout(() => {
        clearInterval(dotInterval); 
        window.location.reload();
      }, 4000);
    } else if (userGuess < randomNumber) {
      setOutputMessage("You guessed low!");
      setShowImage1(true); 
      setOutputColor("orange");
    } else {
      setOutputMessage("You guessed high!");
      setShowImage1(true); 
      setOutputColor("orange");
    }
  };

  return (
    <>
      <div className="container">
        <div className="box">
          <h1>Guess the Number between 1-100</h1>
          <div style={{ pointerEvents: isGameOver ? "none" : "auto" }}>
            <form>
              <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isGameOver}
              />
              <button onClick={handleClick} disabled={isGameOver}>
                Guess
              </button>
            </form>
            <div style={{ color: outputColor }}>{outputMessage}</div>
            {showImage && (
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <img src={WatchImg} alt="Watch" style={{ width: '250px', height: '180px' }} />
              </div>
            )}
            {showImage1 && !showImage && (
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <img src={WatchImg2} alt="Watch" style={{ width: '250px', height: '180px',}} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="footer">
        <p>&copy; 2024 Divakardharma. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default NumberGuessingGame;
