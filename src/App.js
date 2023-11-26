import React, { useState } from "react";
import "./App.css";
import butcherPigImage from "./assets/butcherPig.jpeg";

const App = () => {
  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState("");
  const [inputTranslated, setInputTranslated] = useState("");

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {
    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ");
    console.log("arrayOfUserInput:", arrayOfUserInput);

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map((eachWord) => {
      console.log("eachWord:", eachWord);

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter((vowel) => {
        return (
          vowel === "a" ||
          vowel === "e" ||
          vowel === "i" ||
          vowel === "o" ||
          vowel === "u"
        );
      });
      console.log("vowelsArray:", vowelsArray);
      console.log(eachWord.indexOf(vowelsArray[0]));
      // ACTION ITEM: your Pig Latin logic goes here!
      if (vowelsArray.includes(eachWord.charAt(0))) {
        return eachWord + "way";
      } else if (eachWord.includes("qu")) {
        return (
          eachWord.slice(eachWord.indexOf("qu") + 2) +
          eachWord.slice(0, eachWord.indexOf("qu") + 2) +
          "ay"
        );
      } else if (vowelsArray.length === 0 && eachWord.includes("y")) {
        return (
          eachWord.slice(eachWord.indexOf("y")) +
          eachWord.slice(0, eachWord.indexOf("y")) +
          "ay"
        );
      } else if (!vowelsArray.includes(eachWord.charAt(0))) {
        if (!vowelsArray.includes(eachWord.charAt(1))) {
          if (!vowelsArray.includes(eachWord.charAt(2))) {
            return eachWord.slice(3) + eachWord.slice(0, 3) + "ay";
          }
          return eachWord.slice(2) + eachWord.slice(0, 2) + "ay";
        }
        return eachWord.slice(1) + eachWord.slice(0, 1) + "ay";
      }

      console.log(translatedWordsArray.indexOf(vowelsArray));
      return eachWord;
    });

    // ACTION ITEM: this return will be the output of your Pig Latin'd code

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ");
    console.log("translatedWords:", translatedWords);

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords);
  };

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("");
    setInputTranslated("");
  };

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault();
    myPigLatinCodeHere();
  };

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src="https://openclipart.org/download/223797/IwanPigSVG.svg"
          alt="pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated to pig latin:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>translate</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>
        Created by: Chandler Gipson & Zenia Varela | LEARN Academy
      </footer>
    </div>
  );
};

export default App;
