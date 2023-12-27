import React, { useEffect, useState } from "react";
import alphabet from "../../helpers/alphabet";
import words from "../../helpers/words";
import Header from "../../components/Header";
import styles from "../../styles/colors";
import handleChangeTheme from "../../helpers/changeTheme";

export default function Hangman() {
  const [word, setWord] = useState('');
  const [suggestions, setSugestions] = useState([]);
  const [showSuggestions, setShowSugestions] = useState(false);
  const [wordsUsed, setWordUsed] = useState([]);
  const [endWord, setEndWord] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const [mesage, setMessage] = useState('');
  const [usedLetters, setUsedLetters] = useState([]);
  const [wordToShow, setWordToShow] = useState([]);
  const [errors, setErrors] = useState(0);
  const [themeSelect, setThemeSelect] = useState('dark');


  function newWord() {
    if (word === ''){
      setWordUsed([words?.ptBR[0]?.word]);
      setWord(words?.ptBR[0]?.word);  
      setSugestions(words?.ptBR[0]?.suggestions);
      setUsedLetters([]);
      setEndWord(false);
      setErrors(0);
    } else {
      let aux = false
      words.ptBR.forEach((item) => {
        console.log(wordsUsed)
        console.log(!(wordsUsed.find((x)=>x === item.word)))
        if ((aux===false) && !(wordsUsed.find((x)=> x === item.word))){
          aux=true;
          setWordUsed([...wordsUsed, item.word]);
          setWord(item.word);  
          setSugestions(item.suggestions);
          setUsedLetters([]);
          setEndWord(false);
          setErrors(0);
        }
      });
      if (!aux) {
        setEndGame(true);
        setMessage('Ops! No more words today, return tomorrow for more...')
      }
    }
    console.log(wordsUsed)
  }

  function resetGame() {
    setEndGame(false);
    setEndWord(false);
    setMessage('');
    setWord('')
    setSugestions([]);
    setWordUsed([]);
    setUsedLetters([]);
    setErrors(0);
  }

  function ShowWord() {
    return (
      wordToShow.map((item, index)=>(
        <h1  style={index > 0 ? {marginLeft: '5px'} : {}}>{item.toUpperCase()}</h1>
      ))
    )
  }

  useEffect(()=>{
    if (word !== '') {
      const aux = [];
      let count = 0;
      word.split('').forEach((item, index) => {
        if (usedLetters.find((x)=> x.toUpperCase() === item.toUpperCase())) {
          aux.push(item.toUpperCase());
          count = count + 1;
        } else {
          aux.push('_');     
        }
      })
      setWordToShow(aux);
      if (count === word.split('').length) {
        setEndWord(true);
      }
    } else {
      setWordToShow([]);
    }
  },[usedLetters, word]);

  useEffect(()=>{
    if (errors > 5) {
      setEndWord(true);
      setMessage(`Ops! You Loose...  the word is "${word}"`);
    }
  }, [errors]);

  useEffect(()=>{
    newWord();
  },[])

  return (
    <div
        style={{
          backgroundColor: styles[themeSelect].bg3,
          color: styles[themeSelect].fontColor,
          height: '100vh',
        }}
      >
      <Header themeSelect={themeSelect} />
      <br/>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <ShowWord />
      </div>
      <div style={{ display: 'flex', justifyContent: "center", width: '100vw', boxSizing: "border-box", padding: '16px' }}>
        <div style={{display: 'grid', gridTemplateColumns: '20% 20% 20% 20% 20%', width: '90%', maxWidth: '500px'}}>
          {alphabet.map((item, index) => {
              return (
                <div>
                  <button
                    onClick={() => {
                      setUsedLetters([...usedLetters, item]);
                      if (!word.split('').find((x)=> x.toUpperCase() === item.toUpperCase())) {
                        setErrors(errors+1);
                      }
                    }}
                    style={{ 
                      width: '100%',
                      height: '45px',
                      backgroundColor: styles[themeSelect].bg1,
                      color: styles[themeSelect].fontColor,
                    }}
                    disabled={errors > 5 || endWord || endGame || (usedLetters.find((x) => ( x.toUpperCase() === item.toUpperCase())))}
                  >
                    {item}
                  </button>
                </div>
              )
          })}
        </div>
      </div>
      <div style={{textAlign: 'center'}}>
        <div>
          <button
            onClick={()=>{newWord();}}
            style={{ 
              width: '75vw', 
              height: '45px', 
              maxWidth: '500px',
              borderRadius: '5px',
              backgroundColor: styles[themeSelect].bg1,
              color: styles[themeSelect].fontColor,
            }}
          >
            New Word
          </button>
        </div>
        <div style={{ marginTop: '8px'}}>
          <button
            onClick={()=>{resetGame();}}
            style={{ 
              width: '75vw', 
              height: '45px', 
              maxWidth: '500px',
              borderRadius: '5px',
              backgroundColor: styles[themeSelect].bg1,
              color: styles[themeSelect].fontColor,
            }}
          >
            Reset
          </button>
        </div>
        <div style={{ marginTop: '8px'}}>
          <button
            onClick={()=>{setShowSugestions(!showSuggestions)}}
            style={{ 
              width: '75vw', 
              height: '45px', 
              maxWidth: '500px',
              borderRadius: '5px',
              backgroundColor: styles[themeSelect].bg1,
              color: styles[themeSelect].fontColor,
            }}
          >
            {!showSuggestions ? 'Help' : 'Close Help'}
          </button>
        </div>
        <div style={{marginTop: '8px', textAlign: 'center'}}>
          <button 
            onClick={()=>{ handleChangeTheme(themeSelect, setThemeSelect); }}
            style={{ 
              width: '75vw', 
              height: '45px', 
              maxWidth: '500px',
              borderRadius: '5px',
              backgroundColor: styles[themeSelect].bg1,
              color: styles[themeSelect].fontColor,
            }}
          >
            Theme: {themeSelect.toUpperCase()}
          </button>
        </div>
        {endWord && (
          <div
            style={{
              position: 'absolute',
              top: '45%',
              left: '10vw',
              width: '80vw',
              backgroundColor: styles[themeSelect].fontColor,
              color: styles[themeSelect].bg1,
            }}
          >
            OPAAAA
          </div>
        )}
        {showSuggestions && (
          <div
            style={{
              position: 'absolute',
              top: '45%',
              left: '10vw',
              width: '80vw',
              backgroundColor: styles[themeSelect].fontColor,
              color: styles[themeSelect].bg1,
              padding: '16px',
              boxSizing: 'border-box',
              textAlign: 'left',
              borderRadius: '5px',
            }}
          >
            <h3 style={{marginTop: 3, marginBottom: 3, textAlign: 'center'}}>Ajuda</h3>
            {suggestions.map((item)=>(
              <li>{item}</li>
            ))}
          </div>
        )}
        <div>
          Errors count: {errors} / 6
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
          <h6>
            Developed by Daniel Dessbesell - 2023
          </h6>
        </div>
    </div>
  );
}