import React, { useEffect, useState } from "react";
import alphabet from "../../helpers/alphabet";
import words from "../../helpers/words";

export default function Hangman() {
  const [word, setWord] = useState('');
  const [suggestions, setSugestions] = useState([]);
  const [wordsUsed, setWordUsed] = useState([]);
  const [endGame, setEndGame] = useState(false);
  const [mesage, setMessage] = useState('');
  const [usedLetters, setUsedLetters] = useState([]);
  const [wordToShow, setWordToShow] = useState([])


  function newWord() {
    if (word === ''){
      setWordUsed([words?.ptBR[0]?.word]);
      setWord(words?.ptBR[0]?.word);  
      setSugestions(words?.ptBR[0]?.suggestions);
      setUsedLetters([]);
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
    setMessage('');
    setWord('')
    setSugestions([]);
    setWordUsed([]);
    setUsedLetters([]);
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
      word.split('').forEach((item, index) => {
        if (usedLetters.find((x)=> x.toUpperCase() === item.toUpperCase())) {
          aux.push(item.toUpperCase());
        } else {
          aux.push('_');     
        }
      })
      setWordToShow(aux);
    } else {
      setWordToShow([]);
    }
  },[usedLetters, word]);

  return (
    <div>
      <h4>Hangman</h4>
      <h5>{word.toUpperCase()}</h5>
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
                    onClick={()=>{
                      setUsedLetters([...usedLetters, item])
                    }}
                    style={{ 
                      width: '100%',
                      height: '45px',
                    }}
                  >
                    {item}
                  </button>
                </div>
              )
          })}
        </div>
      </div>
      <div>
        <button
          onClick={()=>{newWord();}}
        >
          New Word
        </button>
        <button
          onClick={()=>{resetGame();}}
        >
          Reset
        </button>
      </div>
    </div>
  );
}