import React from "react";
import styles from "../../styles/colors";

export default function Header({themeSelect='dark'}) {
    return (
      <div 
        style={{
          textAlign: 'center',
          backgroundColor: styles[themeSelect].bg1,
          width: '100vw',
          height: '64px',
          margin: 0,
          padding: 16,
          boxSizing: 'border-box',
        }}
      >
        <h1 style={{margin: 0}} >
          The Hangman Game
        </h1>
      </div>
    )
}