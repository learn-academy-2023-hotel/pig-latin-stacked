import React, { useState } from "react"


const PigLatinConverter = () => {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')

  const handleInputChange = (e) => {
    setInputText(e.target.value)
  };

  const convertToPigLatin = () => {
    const words = inputText.split(' ')

    const pigLatinWords = words.map((word) => {
      if (word.match(/^[aeiouAEIOU]/)) {
        return word + 'way'
      } else if (word.toLowerCase().includes('qu')) {
        const quIndex = word.toLowerCase().indexOf('qu') + 2;
        const prefix = word.slice(0, quIndex);
        const suffix = word.slice(quIndex);
        return suffix + prefix + 'ay';
        // const firstVowelIndex = word.toLowerCase().search(/[aeiou]/)
        // if (firstVowelIndex > -1) {
        //   const prefix = word.slice(0, firstVowelIndex)
        //   const suffix = word.slice(firstVowelIndex)
        //   return suffix + prefix + 'ay'
        } else {
          return word; // Word doesn't contain any vowels.
        }
      })
    }

    setOutputText(pigLatinWords.join(' '))
  };


//   return (
//     <div>
//       <h1>Pig Latin Converter</h1>
      
//       {/* <input
//          type="text"
//          value={inputText}
//          onChange={handleInputChange}
//          placeholder="Enter a sentence"
//       /> 
//       <button onClick={convertToPigLatin}>Convert</button> 
//       <div>
//         <h2>Output:</h2>
//         <p>{outputText}</p> 
//       </div> */}
//     </div>
//   )
// }

// const App = () => {
    //       const [userInput, setUserInput] = useState("")
    //       const [inputTranslated, setInputTranslated] = useState("")
    //       const myPigLatinCodeHere = () => {
    //         const arrayOfUserInput = userInput.split(" ")
    //     console.log("arrayOfUserInput:", arrayOfUserInput)
    //     const translatedWordsArray = arrayOfUserInput.map((eachWord) => {
    //       console.log("eachWord:", eachWord)
    //       const vowelsArray = eachWord.split("").filter((vowel) => {
    //       return (
    //         vowel === "a" ||
    //         vowel === "e" ||
    //         vowel === "i" ||
    //         vowel === "o" ||
    //         vowel === "u"
    //       )
    //     })
    //       console.log("vowelsArray:", vowelsArray)
    //        const convertToPigLatin = () => {
    //         const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    //         const words = userInput.split (' ')
    //         const pigLatinWords = []
    //       }
    
    //       words.forEach(word => {
    //         let pigLatinWords = word
    //         if (vowelsArray.includes(word[0])) {
    //           pigLatinWords = word = 'way'
    //         } else {
    //           let firstVowelIndex = -1 
    //           for(let i = 0; i < word.length; i++) {
    //             firstVowelIndex = i
    //             break 
    //           }
            
    //         }
    //         if (firstVowelIndex !== -1) {
    //           pigLatinWord =
    //             word.substring(firstVowelIndex) +
    //             word.substring(0, firstVowelIndex) +
    //             'ay'
    //         }
    //         pigLatinWords.push(pigLatinWord)
    
    //       })
    //     })
    //       setOutput(pigLatinWords.join(' '))
    //   }
    
    //    return (
    //     <div className="App">
    //       <h1>Pig Latin Converter</h1>
    //       <input
    //         type="text"
    //         value={input}
    //         onChange={e => setInput(e.target.value)}
    //         placeholder="Enter a sentence"
    //       />
    //       <button onClick={convertToPigLatin}>Convert</button>
    //       <h2>Output:</h2>
    //       <p>{output}</p>
    //     </div>
    //   )
        //  })



        // const App = () => {
        //     const [userInput, setUserInput] = useState('');
        //     const [inputTranslated, setInputTranslated] = useState('');
          
        //     const myPigLatinCodeHere = () => {
        //       const arrayOfUserInput = userInput.split(' ');
          
        //       const pigLatinWords = arrayOfUserInput.map((word) => {
        //         const vowelsArray = word.split('').filter((vowel) => {
        //           return ['a', 'e', 'i', 'o', 'u'].includes(vowel.toLowerCase());
        //         });
          
        //         if (vowelsArray.length > 0) {
        //           // Apply Pig Latin conversion logic here and return the converted word
        //           // For example, you can use the PigLatinConverter component here
        //         } else {
        //           // Handle words without vowels if necessary
        //           return word;
        //         }
        //       });
          
        //       const translatedInput = pigLatinWords.join(' ');
        //       setInputTranslated(translatedInput);
        //     };
          
        //     const setUpPreventDefault = (e) => {
        //       e.preventDefault();
        //       myPigLatinCodeHere();
        //     };
          
        //     const restartGame = () => {
        //       setUserInput('');
        //       setInputTranslated('');
        //     };
          
        //     const handleInput = (e) => {
        //       setUserInput(e.target.value);
        //     };
            
          
        //     return (
        //       <div className="page-container"> 
        //         <div className="body-container">
        //           <h1>Pig Latin Translator</h1>
        //           <img
        //             src={butcherPigImage}
        //             alt="pig with butcher cut names in pig latin"
        //             className="butcher-pig-image"
        //           />
          
        //             <PigLatinConverter />
        //             <div className="input-section">
        //             <h4>Enter phrase to be translated:</h4>
        //             <br />
        //             <input
        //               type="text"
        //               className="user-input"
        //               placeholder="Enter a sentence"
        //               onChange={handleInput}
        //               value={userInput}
        //             />
        //             {/* <h2>Output:</h2>
        //                 <p>{inputTranslated}</p>  */}
        //             <button onClick= {setUpPreventDefault}>Translate</button>
        //             <button onClick={restartGame}>Clear</button>
        //             <h2>Output:</h2>
        //                 <p>{inputTranslated}</p> 
        //            {/* <button onClick={convertToPigLatin}>Convert</button>  */}
        //           <div> 
        //               {/* <input
        //               type="text"
        //               value={userInput}
        //               onChange={handleInput}
        //               placeholder="Enter a sentence"
        //               />  */}
        //               {/* <h2>Output:</h2>
        //                 <p>{}</p>  */}
        //                 {/* <button onClick={restartGame}>Clear</button> */}
        //           </div>
        //               {/* <p>{inputTranslated}</p> */}
        //         </div>
        // <footer>&copy; Hotel 2023 | Coded By: Chandler Gipson & Zenia Varela | LEARN Academy </footer>
export default PigLatinConverter
